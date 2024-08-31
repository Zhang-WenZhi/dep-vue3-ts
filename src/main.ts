import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// @/router/index.ts 识别不到？？
import router from '@/router/index.ts';

import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')

