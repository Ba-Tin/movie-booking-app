<template lang="">
        <div class="title">
            <p v-for="tab in tabs"
                :key="tab.id"
                :class="{'active-title': activeTab===tab.id}"
                @click="changeTab(tab.id)"
            >
                {{ tab.name }}
            </p>
        </div>
 
                <Carousel class="py-5" :settings="settings" :breakpoints="breakpoints">
                <slide  v-for="movie in activeTabMovies" :key="movie.id">
                    <MoleculeMovieCard 
                        :movieData="movie"/>
                </slide> 
                <template #addons>
                    <Navigation class="customer__carousel">
                        <template #next>
                            <box-icon name="chevron-right" color="white" size="lg" border="circle"></box-icon>
                        </template>
                        <template #prev>
                            <box-icon name='chevron-left' color="white" size="lg" border="circle"></box-icon>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
      <div class="carousel-button">
         <router-link to="/movies">Xem thêm</router-link>
      </div>

</template>
<script>
import './style.css'
import { MoleculeMovieCard } from "../../molecules";
import { Slide, Carousel, Navigation } from 'vue3-carousel';

import movies from "@/mixin/movies"
export default {
    mixins: [movies],
    components: {
        Slide,
        Carousel,
        Navigation,
        MoleculeMovieCard
    },
}

</script>
<style lang="css" scoped></style>