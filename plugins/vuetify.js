import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.min.css"
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

const lightTheme = {
    dark: false,
    colors: {
        // background: "#f8f9fc",
        primary: colors.indigo.darken3,//colors.blue.darken3,
        sub: "#385F73",
        secondary: "#CD4646",//205,70,70
        accent: "#e91e63",
        error: "#D02020",//"#f44336",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#4caf50"
    }
}
const darkTheme = {
    dark: true,
    colors: {
        background: colors.grey.darken4,
        primary: colors.blue.darken2,
        sub: "#385F73",
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
    }
}

export const defaults = {
    VAppBar: {
        elevation: 0,
    },
    VBtn: {
        // variant: 'outlined',
        // color: 'primary',
        // width: 120,
    },
    VTextField: {
        color: 'primary',
        variant: 'outlined',
        density: 'comfortable',//'default' | 'comfortable' | 'compact'
        // hideDetails: true,
    },
    VSelect: {
        color: 'primary',
        variant: 'outlined',
        density: 'compact',
        hideDetails: true,
    },
    VCheckbox: {
        color: 'primary',
        variant: 'outlined',
        density: 'comfortable',
        hideDetails: true,
    },
    VTextarea: {
        color: 'primary',
        variant: 'outlined',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        defaults,
        ssr: true,
        components,
        directives,
        icons: {
            iconFont: "mdi",
        },
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme,
                darkTheme
            }
        },
        options: { customProperties: true },
    });
    nuxtApp.vueApp.use(vuetify);
});
