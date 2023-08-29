<template lang="">
    <i :class="name"></i>
</template>
<script>
export default {
    props: {
        name: { type: String, required: true },

    },
};
</script>
<style lang="css" scoped></style>