<template lang="">

        <img :src="cinemaSystem.logo" :alt="cinemaSystem.cinemaSystem" />
  
</template>
<script>
export default {
    props: {
        cinemaSystem: { type: Object, required: true },
    },
}
</script>
<style lang="">
    
</style>