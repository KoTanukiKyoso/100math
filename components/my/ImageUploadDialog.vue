<style scoped lang="scss">
.back {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 303;
  justify-content: center;
  align-items: center;
}

.container {
  margin: 0 10px;
  width: calc(100% - 20px);
  max-width: 600px;
  background: white;
}
</style>
<template>
  <div>
    <my-dialog>
      <template #button="{ on }">
        <v-btn v-on:click="on" color="primary">{{ title }}</v-btn>
      </template>
      <template v-slot:title>{{ title }}</template>
      <template #default="dialog">
        <v-card class="pa-3">
          <div class="image-input__field" style="max-width: 600px;" :class="{'over': isDragOver}"
               @dragover.prevent="onDrag('over')" @dragleave="onDrag('leave')" @drop.stop="onDrop">
            <input type="file" :multiple="maxImage>1" title @change="onChange">
            ここをクリックしてファイルを選択<br>またはD＆Dでファイルを追加できます
          </div>
          <slot :clear="clear" :close="()=>close(dialog)"/>
        </v-card>
      </template>
    </my-dialog>
  </div>
</template>

<script>
import * as func from "~/utils/myUtils";

export default {
  name: "ImageUploadDialog",
  data() {
    return {
      isDragOver: false,
      images: [],
    };
  },
  mounted() {
  },
  props: {
    title: {
      type: String,
      default: "画像選択",
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
    reset: {
      type: Boolean,
      default: false,
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
      if (this.reset) this.images = [];
      for (let file of files) {
        let res = await func.readImage(file, this.maxWidth, this.maxHeight, 2);
        if (res) {
          this.images.push({
            src: res[0],
            blob: res[1],
          });
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
      this.$emit("changed", this.images);
    }
  },
};
</script>
