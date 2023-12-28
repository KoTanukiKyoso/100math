import {useStore} from "~/composables";

export default defineNuxtRouteMiddleware((to, from) => {
    console.log("middleware auth");
    let {addMessage, endFirstAuth, isSignedIn, endGettingUser} = useStore();
    if (endFirstAuth.value || endGettingUser.value) {
        if (!isSignedIn.value) {
            addMessage({
                text: "ログインが必要です"
            })
            return navigateTo('/');
        }
    }
});
