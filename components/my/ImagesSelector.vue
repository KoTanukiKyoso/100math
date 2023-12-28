<style scoped lang="scss">
*{
  font-size: 16px;
}
</style>
<template>
  <div>
    <div class="image-input__field" style="max-width: 600px;" :class="{'over': isDragOver}"
         @dragover.prevent="onDrag('over')" @dragleave="onDrag('leave')" @drop.stop="onDrop">
      <input type="file" :multiple="maxImage>1" title @change="onChange">
      ここをクリックしてファイルを選択<br>またはD＆Dでファイルを追加できます
    </div>
    <div class="grey-color cb-font-s">送信可能なファイルは
      <template v-for="t of fileTypes">，{{ t }}</template>
      です
    </div>
  </div>
</template>

<script>
import * as func from "~/utils/myUtils";

export default {
  name: "ImagesSelector",
  model: {
    prop: "images",
  },
  data() {
    return {
      isDragOver: false,
    };
  },
  mounted() {
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    maxHeight: {
      type: Number,
      default: 1000,
    },
    maxSize: {//M
      type: Number,
      default: 3,
    },
    maxImage: {
      type: Number,
      default: 1,
    },
    fileTypes: {
      type: Array,
      default: () => ["jpg", "jpeg", "png", "webp", "gif", "jfif", "bmp"],
    }
  },
  methods: {
    onDrag(type) {
      this.isDragOver = type === "over";
    },
    onDrop() {
      this.isDragOver = false;
    },
    async onChange(event) {
      event.preventDefault();
      const files = event.target.files;
      if (files.length > this.maxImage) {
        this.$store.commit('addMessage', {
          text: `一度に登録可能な画像数は${this.maxImage}枚までです`
        });
        return;
      }
      this.$store.commit('addTask');
      for (let file of files) {
        let type = file.name.split(".")
        type = type[type.length - 1].toLocaleLowerCase()
        if (!this.fileTypes.includes(type)) {
          this.$store.commit('addMessage', {
            text: `送信できない形式のファイルがあります`
          });
        } else {
          let res = await func.readImage(file, this.maxWidth, this.maxHeight, this.maxSize);
          if (res) {
            this.images.push({
              src: res[0],
              blob: res[1],
            });
          }
        }
      }
      this.$store.commit('completeTask');
      this.$emit("changed", this.images);
    },
    close(dialog) {
      dialog.close();
    },
    clear() {
      this.images = [];
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.images;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
  },
};
</script>
