<template lang="">
        <button :class="className">
         <slot/>
        </button>
</template>
<script>
export default {
    props: {

        className: { type: String, required: true },
    }
}
</script>
<style lang="">
    
</style>