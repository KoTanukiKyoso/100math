<style scoped>

</style>
<template>
  <div class="d-inline-block">
    <v-tooltip location="bottom" :disabled="!hover">
      <template v-slot:activator="{ props }">
        <v-btn :icon="icon" v-bind="props" variant="text" color="gray" :size="small ? 'small' : ''" density="compact" @click="open=true"
        tabindex="-1"/>
      </template>
      <div>
        <my-description :text="hint" color="white"/>
      </div>
    </v-tooltip>
    <my-dialog :open="open" :closeAction="()=>open=false">
      <template #title>{{ title }}</template>
      <template #default='dialog'>
        <v-card>
          <v-card-text class="text-body-1" style="color: #333333;">
            <my-description :text="hint" :new-line="true" :show-over="false"/>
          </v-card-text>
        </v-card>
      </template>
    </my-dialog>
  </div>
</template>

<script>

export default {
  name: "Hint",
  mounted() {
  },
  data() {
    return {
      open: false,
    };
  },
  props: {
    icon: {
      type: String,
      require: true,
      default: "mdi-help-circle-outline"
    },
    small: {
      type: Boolean,
      default: true,
    },
    hint: {
      type: String,
      require: true,
      default: "ヒント"
    },
    title: {
      type: String,
      require: true,
      default: "ヒント"
    },
    hover: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  methods: {},
  computed: {}
};
</script>
