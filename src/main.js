import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'
//vuetify
import { createVuetify } from "vuetify"
import * as directives from "vuetify/directives"
import * as components from "vuetify/components"
import "vuetify/styles"
import { aliases, fa } from "vuetify/iconsets/fa"
//pinia
import { createPinia } from "pinia"
//icons
import "@fortawesome/fontawesome-free/css/all.css"

const pinia = createPinia()
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa
        }
    }
})

//app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(pinia)
app.use(router)


app.mount('#app')

