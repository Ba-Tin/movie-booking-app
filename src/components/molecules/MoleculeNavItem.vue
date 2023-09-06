<template lang="">
            <box-icon :name="nav.icon" color="white"></box-icon>
            <atom-link :text="nav.text" :to="nav.to" :className="nav.className"/>
</template>
<script>

import { AtomLink } from '../atoms/';
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

        AtomLink
    },

}
</script>
<style lang="css" scoped></style>