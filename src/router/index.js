import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    // 映射关系: path -> component
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/home/Home.vue')
        },
        {
            path: '/favor',
            component: () => import('@/views/favor/Favor.vue')
        },
        {
            path: '/message',
            component: () => import('@/views/message/Message.vue')
        },
        {
            path: '/order',
            component: () => import('@/views/order/Order.vue')
        },
    ]
})

export default router