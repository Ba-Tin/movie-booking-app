import { createRouter, createWebHistory } from "vue-router"
import MainAdmin from "./layout/admin/MainAdmin/MainAdmin.vue"
import MainClient from "./layout/client/MainClient/MainClient.vue"
import { Cinema, User, Schedule, MovieAdmin, HomeAdmin, CinemaComplex } from "./layout/admin/Content"
import { NewFeed } from "./layout/client/Content";
import { MoleculeNotFound } from "@/components/molecules"
import { OrganismsModalLogin } from "@/components/organisms"
import { auth } from "@/configs/firebase.js";


const requireAuth = (to, from, next) => {
    const user = auth.currentUser;
    if (!user) next({ name: "Login", params: {} })
    else next();

}

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
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ "@/layout/client/Content/Home"),
            },
            {
                path: "/movies",
                component: () => import(/* webpackChunkName: "movies" */ "@/layout/client/Content/Movies"),
            },
            {
                path: "/book-ticket/:filmUrl",
                name: "Booking",
                component: () => import(/* webpackChunkName: "booking" */ "@/layout/client/Content/BookTicket"),
                beforeEnter: requireAuth
            },
            {
                path: "/movies/:filmUrl",
                component: () => import(/* webpackChunkName: "moviedetail" */ "@/layout/client/Content/MovieDetail"),
            },
            {
                path: "/schedulemovie",
                component: () => import(/* webpackChunkName: "schedule" */ "@/layout/client/Content/ScheduleMovie"),
            },
            {
                path: "/myticket",
                name: "MyTicket",
                component: () => import(/* webpackChunkName: "myticket" */ "@/layout/client/Content/MyTicket"),
                beforeEnter: requireAuth


            },
            {
                path: "/newfeed",
                component: NewFeed,
            },

        ],
    },
    {
        path: "/login",
        name: "Login",
        component: OrganismsModalLogin
    },
    {
        path: "/:pathMatch(.*)*",
        component: MoleculeNotFound,
    }


];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router