import { createApp } from "vue"
import App from "./App.vue"
import store from "./vuex/store"
import router from "./router/router"
import "./assets/styles/index.scss"

createApp(App)
.use(store)
.use(router)
.mount("#app")