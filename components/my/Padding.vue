<style scoped>

</style>
<template>
  <div style="width: 100%;" :style="{height: height + `px`}"/>
</template>

<script>

export default {
  name: "Padding",
  mounted() {
  },
  data() {
    return {};
  },
  props: {
    height: {
      type: Number,
      default: 100,
      require: true,
    },
  },
  methods: {},
  computed: {}
};
</script>
