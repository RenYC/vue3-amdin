import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/style.css'

import App from './App.vue'
import router from './router'
import '@/utils/flexible.js' //屏幕自适应

const app = createApp(App)

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
