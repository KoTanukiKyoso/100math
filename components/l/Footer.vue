<style scoped>

</style>
<template>
    <v-footer :app="true" theme="dark" order="2">
        <a target="_blank" style="color: white; text-decoration: none;" href="https://top.nexsjp.com">
            &copy;株式会社NEXS {{ new Date().getFullYear() }}
        </a>
    </v-footer>
</template>

<script>

export default {
    name: "Footer",
    mounted() {
    },
    data() {
        return {};
    },
    props: {

    },
    methods: {},
    computed: {}
};
</script>
