<template lang="">

    <div class="cinema-logo">
      <img v-for="logo in logos"
       :key="logo.id" 
       :src="logo?.logo" 
       :alt="logo?.cinemaSystem"
        :class="{ 'selected': selectedCinema === logo }"
        @click="onSave(logo)"/>
    </div>
</template>
<script>
export default {
    props: {
        logos: { type: Array, required: true },
        selectCinema: { type: Function },
        selectedCinema: Object,
    },
    methods: {
        onSave(logo) {
            this.selectCinema(logo)
        }
    },
}
</script>
<style lang="">
    
</style>