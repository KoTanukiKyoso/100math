<style scoped lang="scss">

</style>
<template>
  <v-btn :variant="back ? 'outlined' : (shorten && !smAndUp) ? 'text' : variant"
         :min-width="icon || block ? undefined : minWidth"
         :color="back ? 'error' : color"
         :size="size"
         :icon="!icon || (shorten && smAndUp) ? undefined : 'mdi-' + icon"
         :elevation="elevation" :block="block" :rounded="rounded"
         :prepend-icon="prependIcon ? `mdi-` + prependIcon : (icon ? `mdi-` + icon : undefined)"
         :append-icon="appendIcon ? `mdi-` + appendIcon : undefined"
         :disabled="disabled"
         class="font-weight-bold"
         style="text-transform: none;" :class="{'text-white': dark}">
    <template v-slot:prepend v-if="prependIconColor && (smAndUp || !shorten)">
      <v-icon :color="prependIconColor"/>
    </template>
    <template v-if="!icon || text" v-slot:default>
      <template v-if="(text && (smAndUp || !shorten)) || icon">
        {{ text }}
      </template>
      <v-tooltip v-if="tips" activator="parent">{{ tips }}</v-tooltip>
      <v-tooltip v-else-if="text && icon && (smAndUp || !shorten)" activator="parent">{{ text }}</v-tooltip>
    </template>
    <template v-slot:append v-if="appendIconColor && (smAndUp || !shorten)">
      <v-icon :color="appendIconColor"/>
    </template>
  </v-btn>
</template>

<script lang="ts">
export default defineComponent({
  layout: false,
  name: "Btn"
});
</script>
<script setup lang="ts">

import {useDisplay} from "vuetify";

interface Props {
  text?: string,
  tips?: string,
  variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain",
  color?: string,
  minWidth?: string | number,
  icon?: string | boolean
  prependIcon?: string,
  appendIcon?: string,
  prependIconColor?: string | undefined,
  appendIconColor?: string | undefined,
  size?: string | number,
  elevation?: string | number,
  dark?: boolean,
  block?: boolean,
  back?: boolean,
  shorten?: boolean,
  rounded?: number | boolean | string,
  disabled?: boolean,
}

const Props = withDefaults(defineProps<Props>(), {
  text: undefined,
  tips: undefined,
  variant: 'elevated',
  color: 'primary',
  minWidth: 120,
  icon: false,
  prependIcon: '',
  appendIcon: '',
  prependIconColor: undefined,
  appendIconColor: undefined,
  size: "default",
  elevation: undefined,
  dark: false,
  block: false,
  back: false,
  shorten: false,
  rounded: 6,
  disabled: false,
})

const {smAndUp} = useDisplay();

</script>
