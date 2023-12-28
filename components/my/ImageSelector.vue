<style scoped lang="scss">

</style>
<template>
    <div>
        <div class="image-input__field" style="max-width: 600px;" :class="{'over': isDragOver}"
             @dragover.prevent="onDrag('over')" @dragleave="onDrag('leave')" @drop.stop="onDrop">
            <input type="file" title @change="onChange">
            ここをクリックしてファイルを選択<br>またはD＆Dでファイルを追加できます
        </div>
    </div>
</template>

<script>
import {readImage} from "~/utils/myUtils";
import {useStore, useTasks} from "~/composables";

export default {
    name: "ImageSelector",
    data() {
        return {
            isDragOver: false,
            image: null,
        };
    },
    setup() {
        let {addMessage} = useStore();
        let tasks = useTasks();
        return {
            addMessage,
            tasks,
        }
    },
    mounted() {

    },
    props: {
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
            if (files.length > 1) {
                this.addMessage({
                    text: `選択可能な画像数は1枚です`
                });
                return;
            }
            this.tasks++;
            let file = files[0];
            let type = file.name.split(".")
            type = type[type.length - 1].toLocaleLowerCase()
            if (!this.fileTypes.includes(type)) {
                this.addMessage({
                    text: `送信できない形式のファイルがあります`
                });
            } else {
                let res = await readImage(file, this.maxWidth, this.maxHeight, this.maxSize);
                if (res) {
                    this.image = res[0];
                }
            }
            this.tasks--;
            this.$emit("changed", this.image);
        },
        close(dialog) {
            dialog.close();
        },
        clear() {
            this.image = null;
            this.$emit("changed", this.image);
        }
    },
    computed: {},
};
</script>
