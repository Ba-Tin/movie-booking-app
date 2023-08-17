<template lang="">
            <atom-icon :name="nav.icon" />
            <atom-link :text="nav.text" :to="nav.to" :className="nav.className"/>
</template>
<script>

import { AtomLink, AtomIcon } from '../atoms/';
export default {
    data() {
        return {
            selectedIndex: null,
        }
    },
    props: {
        nav: {
            type: Object, required: true
        },
    },
    components: {
        AtomIcon,
        AtomLink
    },

}
</script>
<style lang="css" scoped></style>