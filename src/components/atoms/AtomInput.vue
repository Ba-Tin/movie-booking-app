<template lang="">
    <input  :type="typeName" :class="className" :placeholder="placeholderName"/>
</template>
<script>
export default {
    props: {
        typeName: { type: String, required: true },
        className: { type: String, required: true },
        placeholderName: { type: String, required: true },
    },
}
</script>
<style lang="css" scoped></style>