<style scoped>

</style>
<template>
  <div style="display: inline;">
    <slot name="button" :on="openDialog"/>
    <v-overlay v-model="open2" @click:outside="close" scroll-strategy="block"
               style="display: flex; align-items: center; justify-content: center; cursor: default;">
      <div style="max-height: calc(90% - 60px); overflow-y: auto; width: 100vw;" :style="{maxWidth: maxWidth + 'px'}">
        <v-card light>
          <v-card-title class="bg-accent pa-3" style="color: white;">
            <v-btn v-if="showBack" icon="mdi-arrow-left" variant="text" ripple size="large" density="compact" class="ml-2 mr-4" @click="close"/>
            <slot name="title"/>
          </v-card-title>
          <slot :close="close" style="position: relative;"/>
        </v-card>
      </div>
    </v-overlay>
  </div>
</template>

<script>

export default {
  name: "Dialog",
  mounted() {
  },
  beforeDestroy() {
    let html = document.documentElement;
    html.style.overflow = "auto";
  },
  data() {
    return {
      open2: false,
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 600,
    },
    showBack: {
      type: Boolean,
      default: true,
    },
    closeAction: {
      type: Function,
      default: null,
    },
  },
  methods: {
    close() {
      let html = document.documentElement;
      html.style.overflow = "auto";
      this.open2 = false;
      if (this.closeAction) {
        this.closeAction();
      }
      this.$emit('closed');
    },
    openDialog() {
      let html = document.documentElement;
      html.style.overflow = "hidden";
      this.open2 = true;
    },
  },
  watch: {
    open: {
      handler: function (flg) {
        let html = document.documentElement;
        if (flg) {
          html.style.overflow = "hidden";
        } else {
          html.style.overflow = "auto";
        }
        this.open2 = flg;
      }
    },
  },
  computed: {}
};
</script>
