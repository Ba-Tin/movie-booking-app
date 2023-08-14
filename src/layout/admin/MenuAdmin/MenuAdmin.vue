<template lang="">
            <div class="w-100 text-center p-1">
                <atom-logo />
            </div>
            <div v-for="nav in navs" :key="nav.id" :class="{'nav-admin': true, 'active-admin': isActive(nav.to)}">
                <MoleculeNavItem :nav="nav" />
            </div>
</template>
<script>
import { MoleculeNavItem } from "../../../components/molecules";
import AtomLogo from "../../../components/atoms/AtomLogo.vue";
export default {
    data() {
        return {
            navs: [
                {
                    id: 1,
                    icon: 'icon-home.svg',
                    text: "Home",
                    to: '/admin',
                    className: "customer-admin"
                },
                {
                    id: 2,
                    icon: 'icon-discovery.svg',
                    text: "Discovery",
                    to: '/admin/discovery',
                    className: "customer-admin"

                },
                {
                    id: 3,
                    icon: 'icon-community.svg',
                    text: "Community",
                    to: '/admin/community',
                    className: "customer-admin"

                },
                {
                    id: 4,
                    icon: 'icon-clock.svg',
                    text: "Comming Soon",
                    to: '/admin/commingsoon',
                    className: "customer-admin"

                },
            ],
        };
    },
    components: {
        MoleculeNavItem, AtomLogo
    },
    methods: {
        isActive(to) {
            return this.$route.path === to;
        }
    }

}
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