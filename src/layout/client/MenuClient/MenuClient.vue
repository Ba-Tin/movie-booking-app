<template lang="">
            <div class="w-100 text-center p-1">
                <atom-logo />
            </div>
            <div v-for="nav in navs" :key="nav.id" :class="{'nav-client': true, 'active-client': isActive(nav.to)}">
                <MoleculeNavItem :nav="nav"/>
            </div>

            <div class="nav-btn">
                <atom-button className="customer-btn">Đăng Nhập</atom-button>
                <atom-button className="customer-btn">Đăng Ký</atom-button>

            </div>
</template>
<script>
import { MoleculeNavItem } from "../../../components/molecules";
import { AtomLogo, AtomButton } from "../../../components/atoms";
export default {
    data() {
        return {
            navs: [
                {

                    id: 1,
                    icon: 'bx bx-chevron-right',
                    text: "Trang chủ",
                    to: '/',
                    className: "customer-client"
                },
                {
                    id: 2,
                    icon: 'bx bx-chevron-right',
                    text: "Phim",
                    to: '/movie',
                    className: "customer-client"
                },
                {
                    id: 3,
                    icon: 'bx bx-chevron-right',
                    text: "Lịch chiếu",
                    to: '/schedulemovie',
                    className: "customer-client"
                },
                {
                    id: 4,
                    icon: 'bx bx-chevron-right',
                    text: "Tin tức",
                    to: '/newfeed',
                    className: "customer-client"
                },
                // {
                //     id: 5,
                //     icon: 'bx bx-chevron-right',
                //     text: "Liên Hệ",
                //     to: '/lienhe',
                //     className: "customer-client"
                // },
            ],

        };
    },
    components: {
        MoleculeNavItem, AtomLogo, AtomButton
    },
    methods: {
        isActive(to) {
            return this.$route.path === to;
        }
    }

}
</script>
<style lang="css" scoped>
.nav-client {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-top: 0.25rem;

}

.active-client {
    background: var(--bg-orange);
    border-radius: 8px;
}

/* login và register */
.nav-btn {
    display: flex;
    gap: 1rem;
    padding-top: 1rem;

}

.customer-btn {
    text-align: left;
    background: var(--bg-orange);
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    color: var(--text-color);
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 1rem;
}
</style>