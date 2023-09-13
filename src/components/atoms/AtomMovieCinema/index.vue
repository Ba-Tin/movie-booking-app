<template>
  <div class="movies-cinema">
    <div v-for="movie in filteredMovies" :key="movie.filmId" class="movie-item">
      <img :src="movie.image" :alt="movie.filmName" />
      <div class="movies-detail">
        <div class="movie-title">
          <p>{{ movie.filmName }}<span>C16</span></p>
        </div>
        <div class="movie-sub">
          <span class="cinema-2D">2D</span>
          <span class="cinema-sub">Phụ đề</span>
        </div>
        <div class="movie-times">
          <ul class="show-time">
            <li v-for="time in movie.showTimes" :key="time.id">{{ formatTime(time.date) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/dateTime'

export default {
  props: {
    movies: { type: Array, required: true }
  },
  computed: {
    filteredMovies() {
      if (this.$route.params.filmUrl) {
        return this.movies.filter(movie => movie.filmUrl === this.$route.params.filmUrl);
      } else {
        return this.movies;
      }
    }
  },
  methods: {
    formatTime,
  },

}
</script>

<style>
/* Add your styles here if needed */
</style>
