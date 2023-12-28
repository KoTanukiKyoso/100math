<style scoped lang="scss">

</style>
<template>
  <div class="image-input__field" style="max-width: 600px;" :class="{'over': p.isDragOver}"
       @dragover.prevent="onDrag('over')" @dragleave="onDrag('leave')" @drop.stop="onDrop">
    <input type="file" title @change="onChange" :accept="mimeType">
    ここをクリックしてファイルを選択<br>またはD＆Dでファイルを追加できます
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: false,
  name: "FileSelector",
});
</script>
<script setup lang="ts">
import {useStore, useTasks} from "~/composables";
import type {Ref} from "@vue/reactivity";

let {addMessage} = useStore();
let tasks = useTasks();

let p = reactive({
  isDragOver: false,
});
let file: Ref<File | null | undefined> | null = defineModel<File | null>();

export interface Props {
  maxWidth?: number,
  maxHeight?: number,
  maxSize?: number,
  fileTypes?: string[],
  mimeType?: string,
}

const Props = withDefaults(defineProps<Props>(), {
  maxWidth: 1000,
  maxHeight: 1000,
  maxSize: 300,//KB
  fileTypes: () => ["jpg", "jpeg", "png", "webp", "gif", "jfif", "bmp"],
  mimeType: "text/plane",
});

const emit = defineEmits<{
  (e: 'changed'): void
}>();

const onDrag = (type: string) => {
  p.isDragOver = type === "over";
};

const onDrop = () => {
  p.isDragOver = false;
};

const onChange = (event: any) => {
  if (!file) return;
  event.preventDefault();
  const files = event.target.files;
  if (!files || files.length === 0) {
    if (!file) return;
    file.value = null;
    return;
  }
  if (files.length > 1) {
    addMessage({
      text: `選択可能なファイル数は1つです。`
    });
    return;
  }
  tasks.value++;
  // console.log(files[0]);
  let _file = files[0];
  // console.log(_file);
  let types = _file.name.split(".")
  let type = types[types.length - 1].toLocaleLowerCase()
  if (!Props.fileTypes.includes(type)) {
    addMessage({
      text: `ご利用いただけないファイル形式です`
    });
    file.value = null;
  } else {
    file.value = _file;
  }
  tasks.value--;
  // emit("changed");
};

const close = (dialog: any) => {
  dialog.close();
};

const clear = () => {
  if (!file) return;
  file.value = null;
  // emit("changed");
};

</script>
