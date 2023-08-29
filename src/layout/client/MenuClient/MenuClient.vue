<template lang="">
            <div class="w-100 text-center p-1">
                <atom-logo />
            </div>
            <div v-for="nav in navs" :key="nav.id" :class="{'nav-client': true, 'active-client': isActive(nav.to)}">
                <MoleculeNavItem :nav="nav"/>
            </div>
            <div class="nav-btn">
                <atom-button typeName="button" className="customer-btn">Đăng Nhập</atom-button>
                <atom-button typeName="button" className="customer-btn">Đăng Ký</atom-button>
            </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import { MoleculeNavItem } from "../../../components/molecules";
import { AtomLogo, AtomButton } from "../../../components/atoms";
import "./style.css";
export default {
    data() {
        return {
            navs: [
                {

                    id: uuidv4(),
                    icon: 'bx bx-chevron-right',
                    text: "Trang chủ",
                    to: '/',
                    className: "text-white text-uppercase"
                },
                {
                    id: uuidv4(),
                    icon: 'bx bx-chevron-right',
                    text: "Phim",
                    to: '/movies',
                    className: "text-white text-uppercase"
                },
                {
                    id: uuidv4(),
                    icon: 'bx bx-chevron-right',
                    text: "Lịch chiếu",
                    to: '/schedulemovie',
                    className: "text-white text-uppercase"
                },
                {
                    id: uuidv4(),
                    icon: 'bx bx-chevron-right',
                    text: "Tin tức",
                    to: '/newfeed',
                    className: "text-white text-uppercase"
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
<style lang="css" scoped></style>