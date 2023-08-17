<template>
    <div>
        <div class="w-100 text-center p-1">
            <atom-logo />
        </div>
        <div v-for="nav in navs" :key="nav.id">
            <div @click="selectMenuItem(nav)" :class="{ 'nav-admin': true, 'active-admin': isActive(nav.to) }">
                <MoleculeNavItem :nav="nav" />
            </div>
            <div class="px-4" v-if="selectedMenuItem === nav">
                <div v-for="childItem in nav.children" :key="childItem.id">
                    <div :class="{ 'nav-admin': true, 'active-admin': isActive(childItem.to) }">
                        <MoleculeNavItem :nav="childItem" />
                    </div>
                </div>
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
                    icon: 'icon-discovery.svg',
                    text: "Discovery",
                    to: '/admin/discovery',
                    className: "customer-admin",
                    children: [
                        {
                            id: uuidv4(),
                            text: "Child Item 1",
                            className: "customer-admin",
                            to: "/admin/child1"
                        },
                        {
                            id: uuidv4(),
                            text: "Child Item 2",
                            className: "customer-admin",
                            to: "/admin/child2"
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    icon: 'icon-community.svg',
                    text: "Community",
                    to: '/admin/community',
                    className: "customer-admin",
                    children: [
                        {
                            id: uuidv4(),
                            text: "Child Item 1",
                            className: "customer-admin",
                            to: "/admin/child1"
                        },
                        {
                            id: uuidv4(),
                            text: "Child Item 2",
                            className: "customer-admin",
                            to: "/admin/child2"
                        }
                    ]

                },
                {
                    id: uuidv4(),
                    icon: 'icon-clock.svg',
                    text: "Comming Soon",
                    to: '/admin/commingsoon',
                    className: "customer-admin",
                    children: [
                        {
                            id: uuidv4(),
                            text: "Child Item 1",
                            className: "customer-admin",
                            to: "/admin/child1"
                        },
                        {
                            id: uuidv4(),
                            text: "Child Item 2",
                            className: "customer-admin",
                            to: "/admin/child2"
                        }
                    ]

                },
            ],
            selectedMenuItem: null
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
        selectMenuItem(nav) {
            if (nav.children && nav.children.length > 0) {
                this.selectedMenuItem = this.selectedMenuItem === nav ? null : nav;
            }
        }
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