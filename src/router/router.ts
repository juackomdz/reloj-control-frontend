import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: () => import("@/components/MenuMain.vue")
    },
    {
        path: "/admin",
        component: () => import("@/components/MenuMain.vue")
    },
    {
        path: "/login",
        component: () => import("@/views/Login.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})