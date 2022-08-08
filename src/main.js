import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

import 'normalize.css'
import './assets/css/index.css'

// createApp(App) 创建应用实例(传入根组件) 
// mount('#app') 将应用实例挂载到id为app的dom元素上
// use(xxx) 在应用实例中应用xxx插件
createApp(App).use(router).use(pinia).mount('#app') 
