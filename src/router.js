import { createRouter, createWebHistory } from "vue-router"
import MainAdmin from "./layout/admin/MainAdmin/MainAdmin.vue"
import MainClient from "./layout/client/MainClient/MainClient.vue"
import { CommingSoon, Community, Discovery, HomeAdmin } from "./layout/admin/Content"
import { Home, Movie, ScheduleMovie, NewFeed } from "./layout/client/Content"

const routes = [
    {
        path: "/admin",
        component: MainAdmin,
        children: [
            {
                path: "/admin",
                component: HomeAdmin,
            },
            {
                path: "/admin/discovery",
                component: Discovery,
            },
            {
                path: "/admin/community",
                component: Community,
            },
            {
                path: "/admin/commingSoon",
                component: CommingSoon,
            },
        ],

    },
    {
        path: "/",
        component: MainClient,
        children: [
            {
                path: "/",
                component: Home,
            },
            {
                path: "/movie",
                component: Movie,
            },
            {
                path: "/schedulemovie",
                component: ScheduleMovie,
            },
            {
                path: "/newfeed",
                component: NewFeed,
            },
        ],

    }


];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router