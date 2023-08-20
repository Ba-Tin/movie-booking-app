<template lang="">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
             <li v-for="(item, index) in slider"
                :key="index"
                :data-target="'#carouselExampleIndicators'"
                :data-slide-to="index"
                :class="{active : index === activeIndex}">
            </li>
        </ol>
        <div class="carousel-inner">
          <div v-for="(item,index) in slider"
                :key="index"
                class="carousel-item"
                :class="{active: index===activeIndex}"
          >
            <img :src="item.src" class="d-block w-100 " :alt="item.alt">
          </div>
        </div>
        <AtomButton :className="'carousel-control-prev'" :type="'button'" data-target="#carouselExampleIndicators" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </AtomButton>
        <AtomButton :className="'carousel-control-next'" :type="'button'" data-target="#carouselExampleIndicators" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </AtomButton>
    </div>
</template>
<script>
import { AtomButton } from '../atoms/';

export default {
    data() {
        return {
            activeIndex: 0,
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
        AtomButton
    }
}
</script>
<style lang="css" scoped></style>