import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'
//vuetify
import { createVuetify } from "vuetify"
import * as directives from "vuetify/directives"
import * as components from "vuetify/components"
import "vuetify/styles"

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives
})

app.use(vuetify)
app.use(router)


app.mount('#app')

