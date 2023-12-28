// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

let title = "100Math";
let description = "算数100問練習しましょう！";

export default defineNuxtConfig({
    // @ts-ignore
    //     ssr: false,
    // devtools: { enabled: true },
    // typescript: {
    //     shim: false
    // },
    runtimeConfig: {
        public: {

        }
    },
    app: {
        head: {
            titleTemplate: title,//%s -
            title: title,
            htmlAttrs: {
                lang: 'ja',
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: description},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'content-language', content: 'ja'},

                // { name: 'og:site_name', property: 'og:site_name', content: title },
                // { name: 'og:type', property: 'og:type', content: 'website' },
                // { name: 'og:url', property: 'og:url', content: `https://${domain}/${path}` },
                // { name: 'og:title', property: 'og:title', content: title },
                // { name: 'og:description', property: 'og:description', content: description },
                // { name: 'og:image', property: 'og:image', content: `https://${domain}/${path}icon.png` },
                // { name: 'twitter:card', content: 'summary' },　//twitterの画像表示タイプ

                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'mobile-web-app-capable', content: 'yes'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: `/favicon.ico`},
                // {rel: 'manifest', href: `manifest.json`},
            ]
        },
    },
    build: {
        transpile: ['vuetify'],
    },
    // hooks: {
    //     'vite:extendConfig': (config) => {
    //         config.plugins!.push(vuetify())
    //     },
    // },
    vite: {
        vue: {
            script: {
                defineModel: true,
                propsDestructure: true
            }
        },
        ssr: {
            noExternal: ['vuetify'],
        },
        define: {
            'process.env.DEBUG': true,
            "window.global": {},
        },

    },
    css: [
        '@/assets/main.scss',
        '@/assets/variables.scss',
    ],
})
