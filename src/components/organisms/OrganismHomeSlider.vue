<template lang="">
       <Carousel :settings="settings">
         
                <slide v-for="slide in slider" :key="slide">
                    <img :src="slide.src" class="d-block w-100 " :alt="slide.alt">
                </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
       </Carousel>
</template>
<script>

import { Slide, Navigation, Pagination, Carousel } from 'vue3-carousel'
export default {
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            slider: [
                { src: require('@/assets/images/slider/slider-1.jpg'), alt: 'slider-1' },
                { src: require('@/assets/images/slider/slider-2.jpg'), alt: 'slider-2' },
                { src: require('@/assets/images/slider/slider-3.jpg'), alt: 'slider-3' },
                { src: require('@/assets/images/slider/slider-4.jpg'), alt: 'slider-4' },
                { src: require('@/assets/images/slider/slider-5.jpg'), alt: 'slider-5' },
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    }
}
</script>
<style lang="">
    
</style>