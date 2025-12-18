import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/LoginView.vue")
        },
        {
            path: "/registro",
            name: "registro",
            component: () => import("../views/RegisterView.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: () => import("../views/NotFoundView.vue")
        },
        {
            path: "/dashboard",
            name: "accessuser",
            component: () => import("../views/AccessView.vue")
        },
        {
            path: "/test",
            name: "test",
            component: () => import('../components/NavBarComponent.vue')
        }
    ],
})

export default router