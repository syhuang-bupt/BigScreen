import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

createApp(App).use(ElementPlus).use(vue3videoPlay).mount('#app')
