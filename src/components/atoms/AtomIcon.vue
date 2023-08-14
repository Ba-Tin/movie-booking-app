<template lang="">
    
     <img :src="iconPath" :alt="name">
   
</template>
<script>
export default {
    props: {
        name: { type: String, required: true },
        icon: { type: String, required: true },
    },
    computed: {
        iconPath() {
            return require(`@/assets/images/icons/${this.icon}`);
        },
    },
};
</script>
<style lang="css" scoped></style>