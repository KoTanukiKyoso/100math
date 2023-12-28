<style scoped>

</style>
<template>
    <v-text-field v-model="innerPass" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  label="パスワード" prepend-inner-icon="mdi-key" @input="onChanged"
                  :rules="[rules.required, rules.min(7,innerPass)]"
                  :type="show ? 'text' : 'password'" counter="20" @click:append="show=!show" @keyup.enter="enter"
                  :style="{'max-width': maxWidth + 40 + 'px'}" class="password" />
</template>

<script>
import {rules} from "~/utils/myUtils";

export default {
    name: "Password",
    mounted() {
        this.innerPass = this.password;
    },
    data() {
        return {
            show: false,
            rules: rules,
            innerPass: "",
        };
    },
    model: {
        prop: "password",
    },
    props: {
        password: {
            type: String,
        },
        showTip: {
            type: String,
            default: "",
            require: false,
        },
        maxWidth: {
            type: Number,
            default: 400,
        },
    },
    methods: {
        onChanged(v) {
            this.$emit('input', v)
        },
        showed(show) {
            this.$emit('showed', show);
        },
        enter() {
            this.$emit("enter")
        },
    },
    watch: {
        password: {
            immediate: true,
            handler(value) {
                this.innerPass = value;
            }
        }
    },
    computed: {}
};
</script>
