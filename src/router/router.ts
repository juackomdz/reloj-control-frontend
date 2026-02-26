import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/admin",
        component: () => import("@/components/MenuMain.vue")
    },
    {
        path: "/panel/index",
        component: () => import("@/views/IndexUser.vue")
    },
    {
        path: "/panel/asistencia",
        component: () => import("@/views/AssistUser.vue")
    },
    {
        path: "/panel/registros",
        component: () => import("@/views/RegistersUser.vue")
    },
    {
        path: "/test-admin",
        component: () => import("@/views/testa.vue")
    },
    {
        path: "/test-user",
        component: () => import("@/views/testu.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})