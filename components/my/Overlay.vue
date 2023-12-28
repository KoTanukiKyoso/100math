<style scoped>
.overlay {
    z-index: 2010;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
    <transition name="opacity">
        <div class="overlay" v-if="tasks !== 0">
            <v-progress-circular size="50" indeterminate color="primary"/>
        </div>
    </transition>
</template>

<script>
export default defineComponent({
    layout: false,
    name: "Overlay"
});
</script>

<script setup>
import {useTasks} from "~/composables";

let tasks = useTasks();
</script>
