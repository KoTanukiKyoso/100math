<style scoped>

</style>
<template>
  <div>
    <v-tooltip v-if="show" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn icon @click="showed(false)" class="mr-2">
          <v-icon v-bind="props" color="primary">mdi-eye</v-icon>
        </v-btn>
      </template>
      <span>{{ showTip }}</span>
    </v-tooltip>
    <v-tooltip v-else location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn icon @click="showed(true)" class="mr-2">
          <v-icon v-bind="props" color="grey">mdi-eye-off</v-icon>
        </v-btn>
      </template>
      <span>{{ unShowTip }}</span>
    </v-tooltip>
  </div>
</template>

<script>

export default {
  name: "Eyes",
  mounted() {
  },
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    showTip: {
      type: String,
      default: "",
      require: false,
    },
    unShowTip: {
      type: String,
      default: "",
      require: false,
    },
  },
  methods: {
    showed(show) {
      this.$emit('showed', show);
    },
  },
  computed: {}
};
</script>
