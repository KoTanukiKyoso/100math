<style scoped lang="scss">
.alert {
  //z-index list
  //v-overlay:凡そ2000→ダイアログ
  //sweetalert:2008
  //ロード中 my-overlay:2010
  //アラート 2050
  z-index: 2050;
  position: fixed;
  top: 20px;
  margin: 5px auto;
  left: 0;
  right: 0;
  width: calc(100% - 20px);
  max-width: 800px;
}

//===Vueアニメーション===
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

/*透明度のみ*/
.opacity-leave-active,
.opacity-enter-active {
  transition: opacity 0.5s;
}

.opacity-enter-from {
  opacity: 0;
}

.opacity-enter-to {
  opacity: 1;
}

.opacity-leave-from {
  opacity: 1;
}

.opacity-leave-to {
  opacity: 0;
}

/*縦方向*/
.downup-leave-active,
.downup-enter-active {
  /* transition: opacity 1s; */
  transition: all 0.5s;
}

.downup-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}

.downup-enter-to {
  opacity: 1;
}

.downup-leave-from {
  opacity: 1;
}

.downup-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

//===アニメーション===
</style>
<template>
  <transition name="downup" @after-leave="leave">
    <v-alert v-model="alert" v-if="messages.length > 0 && showing && alert"
             class="alert white--text" :type="risks[messages[0].risk]"
             border :closable="messages[0].dismissible" elevation="10">
      <div class="pl-2">{{ messages[0].text }}</div>
    </v-alert>
  </transition>
</template>

<script>
export default defineComponent({
  layout: false,
  name: "Alert"
});
</script>
<script setup>
import {useStore} from "~/composables";

let {addMessage, messages} = useStore();
let risks = ["success", "info", "warning", "error"];
let alert = ref(false);
let showing = ref(false);
const leave = () => {
  showing.value = false;
  alert.value = true;
  if (messages.value.length > 0) {
    messages.value.shift();
  }
};
const nextMessage = () => {
  showing.value = false;
};

//どうやら配列（オブジェクト？）はvalueでwatchするみたい
watch(messages.value, () => {
  if (showing.value) {
    return;
  }
  let message = messages.value[0];
  if (messages.value.length > 0) {
    alert.value = true;
    showing.value = true;
    console.log(message.text);
    if (!message.dismissible) {
      setTimeout(nextMessage, message.time * 1000);
    }
  }
});

</script>
