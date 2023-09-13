<template lang="">
            <div class="w-100 text-center p-1">
                <atom-logo />
            </div>
            <div v-for="nav in navs" :key="nav.id" :class="{'nav-client': true, 'active-client': isActive(nav.to)}">
                <MoleculeNavItem :nav="nav"/>
            </div>
            <div v-if="user">
    
                <div  class="nav-end">
                    <div class="user">
                        <span>Hello, {{user?.displayName}}</span>
                    </div>
                </div>
                <atom-button typeName="button" className="customer-btn" @click="onLogOut" >Đăng xuất</atom-button>

                
            </div>

            <div v-else class="nav-btn">
                <atom-button typeName="button" className="customer-btn" @click="redirectToLogin">Đăng Nhập</atom-button>
                <atom-button typeName="button" className="customer-btn" @click="redirectToLogin" >Đăng Ký</atom-button>
            </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MoleculeNavItem } from "@/components/molecules";
import { AtomButton, AtomLogo } from "@/components/atoms";
import { useUser } from "@/mixin/User/useUser"
import { useLogOut } from "@/mixin/User/useLogOut"

import "./style.css";

export default {
    setup() {
        const router = useRouter();
        const { getUser } = useUser();
        const { user } = getUser();
        const { error, logOut } = useLogOut();
        const navs = ref([
            {
                id: uuidv4(),
                icon: 'chevron-right',
                text: "Trang chủ",
                to: '/',
                className: "text-white text-uppercase"
            },
            {
                id: uuidv4(),
                icon: 'chevron-right',
                text: "Phim",
                to: '/movies',
                className: "text-white text-uppercase"
            },
            {
                id: uuidv4(),
                icon: 'chevron-right',
                text: "Lịch chiếu",
                to: '/schedulemovie',
                className: "text-white text-uppercase"
            },
            {
                id: uuidv4(),
                icon: 'chevron-right',
                text: "Vé của bạn",
                to: '/myticket',
                className: "text-white text-uppercase"
            },
        ]);

        const isActive = (to) => {
            return router.currentRoute.value.path === to;
        };
        const redirectToLogin = () => {
            router.push({ name: "Login", params: {} })
        };
        async function onLogOut() {
            await logOut();
            if (!error.value) router.push({ name: "Login", params: {} })
        }
        // const filteredNavs = computed(() => {
        //     if (user) {
        //         return navs.value.filter((nav) => {
        //             nav.text === "Vé của bạn";
        //         });
        //     }
        //     return navs.value;
        // });
        return {
            navs,
            redirectToLogin,
            isActive,
            user,
            onLogOut,

        };
    },
    components: {
        MoleculeNavItem,
        AtomLogo,
        AtomButton,
    },
};
</script>

<style lang="css" scoped></style>