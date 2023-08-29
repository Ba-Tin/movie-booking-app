<template>
    <div>
        <div class="w-100 text-center p-1">
            <atom-logo />
        </div>
        <div v-for="nav in navs" :key="nav.id">
            <div :class="{ 'nav-admin': true, 'active-admin': isActive(nav.to) }">
                <MoleculeNavItem :nav="nav" />
            </div>
        </div>
    </div>
</template>
<script>
import { MoleculeNavItem } from "../../../components/molecules";
import AtomLogo from "../../../components/atoms/AtomLogo.vue";
import { v4 as uuidv4 } from 'uuid';
import './style.css';
export default {
    data() {
        return {
            navs: [
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-home-alt-2',
                    text: "Home",
                    to: '/admin',
                    className: "text-white ml-2",
                },
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-user',
                    text: "Quản lý người dùng",
                    to: '/admin/user',
                    className: "text-white ml-2",
                },
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-camera-movie',
                    text: "Danh sách rạp phim",
                    to: '/admin/cinema',
                    className: "text-white ml-2",
                },
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-camera-movie',
                    text: "Danh sách cụm rạp",
                    to: '/admin/cinemacomplex',
                    className: "text-white ml-2",
                },
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-movie',
                    text: "Danh sách phim",
                    to: '/admin/movie',
                    className: "text-white ml-2",
                },
                {
                    id: uuidv4(),
                    icon: 'h2 bx bxs-calendar',
                    text: "Lịch chiếu",
                    to: '/admin/schedule',
                    className: "text-white ml-2",
                },
            ],
        };
    },
    components: {
        MoleculeNavItem,
        AtomLogo
    },
    methods: {
        isActive(to) {
            return this.$route.path === to;
        },
    }
};
</script>
<style lang="css" scoped></style>