import { createApp } from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@renderer/router'
import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/index.scss'
import '@icon-park/vue-next/styles/index.css'
import { install } from '@icon-park/vue-next/es/all'
import 'element-plus/dist/index.css'
import '@renderer/assets/css/element.scss'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
//pinia
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
//vue router
app.use(router)
// IconPark
install(app, 'y')
// element ui
app.use(ElementPlus)


app.mount('#app')
