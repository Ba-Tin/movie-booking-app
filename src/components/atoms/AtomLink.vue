<template lang="">
  <router-link :to="to" :class="className"> {{text}}</router-link>
</template>
<script>
export default {
    props: {
        text: { type: String, required: true },
        to: { type: String, required: true },
        className: { type: String, required: true }
    },
}
</script>
<style lang="css" scoped>
.customer-admin {
    color: var(--text-color);
    margin-left: 0.5rem;
}

.customer-client {
    color: var(--text-color);
    text-transform: uppercase;
}
</style>