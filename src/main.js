import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'
import Element from 'element-plus'
import store from './views/store'
import 'element-plus/dist/index.css'
import DAGBoard from '../plugin/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(DAGBoard)
}
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(DAGBoard)
app.use(Element)
app.use(Router)
app.use(store)
app.config.productionTip = false
app.mount('#app')
