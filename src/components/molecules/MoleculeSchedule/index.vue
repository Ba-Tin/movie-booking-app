<template>
  <div class="showtimes-movies">
    <div class="title">
      <p class="active-title">{{ title }}</p>
    </div>
    <AtomLogoCinema :logos="showTimeMovie" :selectCinema="selectCinema" :selectedCinema="selectedCinema" />
    <div class="showtimes-cinema">
      <AtomAddressCinema :address="selectedCinema" :selectMovie="selectMovie" :selectedMovie="selectedMovie" />
      <AtomDateCinema :date="filteredMovies" :selectFilm="selectFilm" />
      <AtomMovieCinema :movies="filteredMovies" />
    </div>
  </div>
</template>
<script>
import "./style.css"
import { mapState, mapActions } from "vuex";
import { AtomLogoCinema, AtomAddressCinema, AtomDateCinema, AtomMovieCinema } from "@/components/atoms"

export default {
  props: {
    title: String,
    movie: { type: Object }

  },
  data() {
    return {
      selectedCinema: [],
      selectedMovie: [],
    }
  },
  components: {
    AtomLogoCinema,
    AtomAddressCinema,
    AtomDateCinema,
    AtomMovieCinema
  },
  computed: {
    ...mapState(['showTimeMovie']),
    filteredMovies() {
      const currentDate = new Date();
      const uniqueDates = new Set();
      const filteredMovies = this.selectedMovie.map(movie => {
        const filteredShowTimes = movie.showTimes.filter(showTime => {
          const showDate = new Date(showTime.date);
          if (showDate >= currentDate) {
            const dateString = showDate.toDateString();
            if (!uniqueDates.has(dateString)) {
              uniqueDates.add(dateString);
              return true;
            }
          }
          return false;
        });
        movie.showTimes = filteredShowTimes;
        return movie.showTimes.length > 0 ? movie : null;
      }).filter(movie => movie !== null);
      return filteredMovies;
    }
  },
  methods: {
    ...mapActions(['getAllShowTimes']),
    async fetchAllMovies() {
      await this.getAllShowTimes();
      if (this.showTimeMovie && this.showTimeMovie.length > 0) {
        this.selectedCinema = this.showTimeMovie[0];
        this.selectCinema(this.selectedCinema);
      }
    },
    selectCinema(logo) {
      this.selectedCinema = logo;
      if (logo && logo.cinemaAddressList && logo.cinemaAddressList.length > 0) {
        this.selectedMovie = logo.cinemaAddressList[0].listFilm;
      } else {
        this.selectedMovie = [];
      }
    },
    selectMovie(address) {
      this.selectedMovie = address.listFilm;

    },
    selectFilm(film) {
      console.log("film", film);
    },
  },
  created() {
    this.fetchAllMovies();
  },
}
</script>
<style lang="">
    
</style>