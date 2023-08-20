<template lang="">
    
     <!-- <img :src="iconPath" :alt="name"> -->
    <i :class="name"></i>
</template>
<script>
export default {
    props: {
        name: { type: String, required: true },

    },
    // computed: {
    //     iconPath() {
    //         return require(`@/assets/images/icons/${this.icon}`);
    //     },
    // },
};
</script>
<style lang="css" scoped>
i {
    color: var(--text-color);
    font-size: 2rem;
}

.icon-close {
    color: black
}
</style>