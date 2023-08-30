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
        <div class="d-flex flex-wrap movies-container py-5">
               <template v-for="movie in activeTabMovies" :key="movie.id">
                    <MoleculeMovieCard :movieData="movie"  />
                </template>
        </div>
     
</template>
<script>
import './style.css';
import movies from "@/mixin/movies"
import { MoleculeMovieCard } from "@/components/molecules/"
export default {
    mixins: [movies],
    components: {
        MoleculeMovieCard
    },
}
</script>
<style lang="">
    
</style>