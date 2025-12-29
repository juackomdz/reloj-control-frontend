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
            component: () => import("../views/AccessView.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/dashboard/graph",
            name: "graph",
            component: () => import("../views/DashboardView.vue"),
            meta: {
                requiresAuth: true
            }
        }
    ],
})

router.beforeEach((to, from, next) => {

    const user = localStorage.getItem("user")
    if (to.meta.requiresAuth) {
        if (user) {
            next()
        } else {
            next("/")
        }
    } else {
        next()
    }
})

export default router