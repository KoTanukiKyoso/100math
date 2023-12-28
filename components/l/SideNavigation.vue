<style lang="scss" scoped>
.selected {
  //color: grey;
  background: #707070;

  .v-list-item-title {
    font-weight: bold;
    font-size: 18px;
    //color: white;
  }
}
</style>
<template>
  <v-navigation-drawer v-model="show" :permanent="!smAndDown" :temporary="smAndDown" width="220"
                       order="3" theme="dark" color="#333333" :rail="isRail">
    <template #append>
      <div v-if="show" class="text-right mb-2">
        <v-btn variant="text" :icon="isRail ? 'mdi-arrow-expand-right' : 'mdi-arrow-expand-left'" @click="isRail=!isRail"/>
      </div>
      <div v-if="show && smAndDown" class="pa-2">
        <v-btn :block="true" @click="show=false">閉じる</v-btn>
      </div>
    </template>
    <v-list color="grey" class="py-0" active-class="selected">
      <v-list-item v-if="isSignedIn" to="/apps" :active="route.path === `/apps`" active-class="selected" height="60">
        <template v-slot:prepend>
          <v-icon color="white" size="large" icon="mdi-apps"/>
        </template>
        <v-list-item-title class="font-weight-bold" style="font-size: 18px;">アプリ選択</v-list-item-title>
      </v-list-item>
      <v-divider class="transparent"/>
      <template v-for="(item, i) in pages">
        <v-list-item v-if="!((item.conds.signedIn && !isSignedIn) || (item.conds.appSelected && !selectedApp))"
                     :key="i" :value="item" :to="item.to"
                     height="60" :active="route.path === item.to">
          <template v-slot:prepend>
            <v-icon color="white" size="large" style="opacity: 0.8;" :icon="item.icon"/>
          </template>
          <v-list-item-title v-text="item.title"/>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default defineComponent({
  layout: false,
  name: "SideNavigation"
});
</script>
<script setup lang="ts">
import {useDisplay} from 'vuetify';
import {useStore, useTasks} from "~/composables";

let {isSignedIn, user, title, resetAuth, pages, selectedApp, isRail} = useStore();
const router = useRouter();
const route = useRoute();
const props = withDefaults(
  defineProps<{ modelValue: boolean; }>(),
  {modelValue: false,}
);

const emit = defineEmits<{
  (e: 'update:modelValue', show: boolean): void
}>();

const show = computed({
  get: () => props.modelValue,
  set: (value) => { // 値に変更があると呼ばれるsetter
    emit('update:modelValue', value);
  },
});

const {smAndDown, mdAndUp} = useDisplay();

</script>
