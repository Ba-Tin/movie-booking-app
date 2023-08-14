<template lang="">
    <h3> {{text}}</h3>
</template>
<script>
export default {
    props: {
        text: { type: String, required: true }
    }
}
</script>
<style lang="css" scoped>
h3 {
    color: #a4a8c3
}
</style>