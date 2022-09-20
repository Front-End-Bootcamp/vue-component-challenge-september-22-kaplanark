import { createRouter, createWebHistory } from "vue-router"
import homeRoutes from "./homepage.routes"
import welcomeRoutes from "./welcome.routes"

const router = createRouter({
    history: createWebHistory(),
    routes: [...homeRoutes, ...welcomeRoutes]
})

export default router