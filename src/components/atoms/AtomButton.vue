<template lang="">
        <button :type="typeName" :class="className">
         <slot/>
        </button>
</template>
<script>
export default {
    props: {
        type: { type: String, required: true },
        className: { type: String, required: true },
    }
}
</script>
<style lang="">
    
</style>