<template>
  <div class="showtimes-movies">
    <div class="title">
      <p class="active-title">Lịch chiếu</p>
    </div>
    <div class="cinema-logo">
      <img v-for="cinema in showTimeMovie" :key="cinema.id" :src="cinema?.logo" :alt="cinema?.cinemaSystem"
        :class="{ 'selected': selectedCinema === cinema }" @click="selectCinema(cinema)" />
    </div>
    <div class="showtimes-cinema">
      <div class="local-cinema">
        <div class="local-detail" v-for="address in selectedCinema?.cinemaAddressList" :key="address.id"
          :class="{ 'active-movie': selectedMovie === address?.listFilm }" @click="selectMovie(address)">
          <div class="movie-img">
            <img :src="selectedCinema?.logo" alt="" />
          </div>
          <div class="address-cinema-items">
            <p class="cinema-name">{{ getNameCinema(address?.name) }}<span> - {{ getAddressCinema(address?.name) }}</span>
            </p>
            <p class="address-cinema">{{ address?.address }}</p>
          </div>
        </div>
      </div>
      <div class="date-cinema" v-for="date in filteredMovies" :key="date.id">
        <div class="date-detail" v-for="day in date?.showTimes" :key="day.id">
          <p class="day-cinema">{{ formatTimeWithDay(day.date) }}
            <span class="month-cinema ">{{ formatDateMonth(day?.date) }}</span>
          </p>
        </div>
      </div>
      <div class="movies-cinema">
        <div class="movie-item" v-for="movie in filteredMovies" :key="movie.filmId">
          <div class="movie-img">
            <img :src="movie?.image" alt="" />
          </div>
          <div class="movies-detail">
            <div class="movie-title">
              <p>{{ movie?.filmName }} <span>C16</span></p>
            </div>
            <div class="movie-sub">
              <span class="cinema-2D">2D</span>
              <span class="cinema-sub">Phụ đề</span>
            </div>
            <div class="movie-times">
              <ul class="show-time">
                <li v-for="showTime in movie?.showTimes" :key="showTime.id">{{ formatTime(showTime?.date) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.css"
import { mapState, mapActions } from "vuex";
import { formatTime, formatTimeWithDay, formatDateMonth } from '@/utils/dateTime'

export default {
  data() {
    return {
      selectedCinema: null,
      selectedMovie: [],
    }
  },
  computed: {
    ...mapState(['showTimeMovie']),
    filteredMovies() {
      const currentDate = new Date();
      const moviesCopy = JSON.parse(JSON.stringify(this.selectedMovie));
      const uniqueDates = new Set();
      const filteredMovies = moviesCopy.map(movie => {
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

        if (filteredShowTimes.length === 0) {
          return null;
        }
        movie.showTimes = filteredShowTimes;
        return movie;
      }).filter(movie => movie !== null);
      return filteredMovies;
    },
  },
  methods: {
    ...mapActions(['getAllShowTimes']),
    async fetchAllMovies() {
      await this.getAllShowTimes();
      if (this.showTimeMovie && this.showTimeMovie.length > 0) {
        this.selectedCinema = this.showTimeMovie[0];
      }
    },
    selectCinema(cinema) {
      this.selectedCinema = cinema;
      if (cinema && cinema.cinemaAddressList && cinema.cinemaAddressList.length > 0) {
        this.selectedMovie = cinema.cinemaAddressList[0].listFilm;
      } else {
        this.selectedMovie = [];
      }
    },
    selectMovie(address) {
      this.selectedMovie = address.listFilm;
    },
    // Get tên rạp
    getNameCinema(cinemaSystem) {
      // Tách phần tên thương hiệu từ chuỗi
      const parts = cinemaSystem.split(" - ");
      if (parts.length === 2) {
        return parts[0];
      } else {
        return cinemaSystem;
      }
    },
    // get địa chỉ Rạp phim
    getAddressCinema(address) {
      const parts = address.split(" - ");
      if (parts.length === 2) {
        return parts[1];
      } else {
        return address;
      }
    },
    formatTime, formatTimeWithDay, formatDateMonth
  },
  created() {
    this.fetchAllMovies();

  },
  mounted() {

  },
}
</script>
<style lang="">
    
</style>