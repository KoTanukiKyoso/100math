<template>
  <v-app>
    <Html lang="ja"/>
    <v-app-bar color="primary" order="1">
      <template v-if="!mdAndUp" v-slot:prepend>
        <v-btn icon="mdi-menu" width="50" @click.stop="drawer = !drawer"/>
      </template>
      <div class="ml-1 ml-md-4 mr-4 " style="background: rgba(255,255,255,0.4); border-radius: 6px;">
        <nuxt-link to="/">
          <v-img contain src="/icon.png" :width="xs ? 34 : 40"/>
        </nuxt-link>
      </div>
      <nuxt-link to="/" style="text-decoration: none; color: white;">
        <v-toolbar-title :style="xs ? { fontSize: '16px' } : {}">
          {{ title }}
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer/>
      <div v-if="false" class="pr-3">
        <my-btn variant="outlined" color="white" to="/login" icon="login" shorten text="ログイン"/>
      </div>
    </v-app-bar>
    <l-side-navigation v-if="false" v-model="drawer"/>
    <v-main style="overflow-x: hidden;">
      <my-alert/>
      <my-overlay/>
      <div class="mx-auto">
        <NuxtPage/>
      </div>
    </v-main>
    <l-footer/>
  </v-app>
</template>

<script setup>
import {useDisplay} from 'vuetify';
import {useStore, useTasks} from "./composables";

let {user, title, app} = useStore();
let tasks = useTasks();
const router = useRouter();
onMounted(() => {

})

let drawer = ref(false);

const {xs, mdAndUp} = useDisplay();
drawer.value = !!mdAndUp;
watch(mdAndUp, () => {
  drawer.value = !!mdAndUp;
});

useHead({
  title: '100Math',
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'apple-mobile-web-app-capable', content: 'yes'},
    {name: 'mobile-web-app-capable', content: 'yes'},
  ],
  link: [
    // {rel: 'icon', type: 'image/x-icon', href: `/favicon.ico`},
    // {rel: 'manifest', href: `manifest.json`},
  ]
});

</script>
