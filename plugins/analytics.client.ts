import {inject} from '@vercel/analytics';

export default defineNuxtPlugin(() => {
    // @ts-ignore
    // if (process.env.DEBUG !== true) {
        inject();
    // }
});