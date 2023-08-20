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
export default {
    data() {
        return {
            navs: [
                {
                    id: uuidv4(),
                    icon: 'bx bxs-home-alt-2',
                    text: "Home",
                    to: '/admin',
                    className: "customer-admin",
                },
                {
                    id: uuidv4(),
                    icon: 'bx bxs-user',
                    text: "Quản lý người dùng",
                    to: '/admin/user',
                    className: "customer-admin",
                },
                {
                    id: uuidv4(),
                    icon: 'bx bxs-camera-movie',
                    text: "Danh sách rạp phim",
                    to: '/admin/cinema',
                    className: "customer-admin",
                },
                {
                    id: uuidv4(),
                    icon: 'bx bxs-camera-movie',
                    text: "Danh sách cụm rạp",
                    to: '/admin/cinemacomplex',
                    className: "customer-admin",
                },
                {
                    id: uuidv4(),
                    icon: 'bx bxs-movie',
                    text: "Danh sách phim",
                    to: '/admin/movie',
                    className: "customer-admin",
                },
                {
                    id: uuidv4(),
                    icon: 'bx bxs-calendar',
                    text: "Lịch chiếu",
                    to: '/admin/schedule',
                    className: "customer-admin",
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
<style lang="css" scoped>
.nav-admin {
    padding: 0.5rem 1rem;
    margin-top: 0.25rem;
}

.active-admin {
    background: #7367f0;
    border-radius: 4px;
}
</style>