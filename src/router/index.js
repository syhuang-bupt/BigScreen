
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const constantRoutes = [
    {
        path: '/',
        component: Home
    }
]


let router = createRouter({
    history: createWebHistory('/web/shelters'),
    routes:constantRoutes,
})

export default router;

