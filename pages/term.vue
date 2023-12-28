<template>
    <div>
        <v-btn color="primary">afsdfd</v-btn>
        <v-btn color="primary">aiueo</v-btn>
        <v-btn color="error">ttt</v-btn>
    </div>
</template>

<script setup>
import {useStore} from "~/composables";

definePageMeta({
    layout: false,
});
let store = useStore();



</script>
