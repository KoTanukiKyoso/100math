<style scoped>

</style>
<template>
  <div class="pa-md-4 mx-auto" :style="{maxWidth: maxWidth}">
    <v-card variant="flat" :border="border" class="mx-auto" min-height="400" :color="color">
      <slot/>
    </v-card>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: false,
  name: "PageContainer",
});
</script>
<script setup lang="ts">

// type borderType = string | number | boolean | undefined;
export interface Props {
  maxWidth?: string | number,
  color?: string,
  border?: boolean,
}

const Props = withDefaults(defineProps<Props>(), {
  maxWidth: "1000px",
  color: "transparent",
  border: false,
})
</script>
