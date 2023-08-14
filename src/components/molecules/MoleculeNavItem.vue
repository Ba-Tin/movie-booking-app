<template lang="">
            <atom-icon :icon="nav.icon" :name="nav.text" />
            <atom-link :text="nav.text" :to="nav.to" :className="nav.className"/>
</template>
<script>
import AtomIcon from '../atoms/AtomIcon.vue';
import AtomLink from '../atoms/AtomLink.vue';
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