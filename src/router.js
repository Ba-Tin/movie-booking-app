import { createRouter, createWebHistory } from "vue-router"
import MainAdmin from "./layout/admin/MainAdmin/MainAdmin.vue"
import MainClient from "./layout/client/MainClient/MainClient.vue"
import { Cinema, User, Schedule, MovieAdmin, HomeAdmin, CinemaComplex } from "./layout/admin/Content"
import { Home, Movies, ScheduleMovie, NewFeed } from "./layout/client/Content"

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
                path: "/admin/user",
                component: User,
            },
            {
                path: "/admin/cinema",
                component: Cinema,
            },
            {
                path: "/admin/cinemacomplex",
                component: CinemaComplex,
            },
            {
                path: "/admin/movie",
                component: MovieAdmin,
            },
            {
                path: "/admin/schedule",
                component: Schedule,
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
                path: "/movies",
                component: Movies,
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