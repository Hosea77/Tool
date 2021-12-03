import {
    createApp
} from 'vue'
import App from './App.vue'

import router from './router'

// // 支持vue-cli 不支持vite
// import {
//     locale
// } from 'element-plus'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// locale(lang)

// 全局Css
import '@/styles/index.scss'

const Vue = createApp(App)
// Vue.use(store)
Vue.use(router)

Vue.mount('#app')