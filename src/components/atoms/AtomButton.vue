<template lang="">
        <button :class="className" :type="typeName">
         <slot/>
        </button>
</template>
<script>
export default {
    props: {
        typeName: { type: String, required: true },
        className: { type: String, required: true },
    }
}
</script>
<style lang="">
    
</style>