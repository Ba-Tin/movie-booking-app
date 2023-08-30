<template lang="">
   <div class="movie-banner">
      <img :src="movieDetail?.image" alt="" />
      <div class="movie-detail">
        <img :src="movieDetail?.image" alt="" />
        <div class="movie-content">
          <p class="show-date">{{getFormattedDate(movieDetail?.startDate)}}</p>
          <h1 class="movie-name">{{movieDetail?.filmName}}</h1>
          <p class="length-movie">130 phút - 3.0IMDb - 2D/Digital</p>
          <div class="buy-ticket">
            <button type="submit" class="button">Mua vé</button>
          </div>
        </div>
        <div class="detail-movie-rating">
           <circle-progress
           :percent="movieDetail ? (movieDetail.rating  ) : 0"
            empty-color='#787878'
             :viewport="true" :show-percent="true"
            :is-gradient="true"
            :gradient="{
              stopColor: '#ff6e00',
             }"
            
            />
          <div class="rating-icon">
           <span class="movie-rating-number">{{movieData?.rating === 0 ? 'Chưa có đánh giá' : movieData?.rating}}</span>
                <span class="movie-rating-icon">
                  <AtomIcon
                    v-for="index in 5"
                    :key="index"
                    :name="['bx', 'bxs-star', { 'text-warning': index <= movieData?.rating, 'text-secondary': index > movieData?.rating }]"
                  ></AtomIcon>
                </span>
          </div>
        </div>
      </div>
    </div>
   
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { AtomIcon } from "../../atoms"
import { getFormattedDate } from "../../../utils/dateTime";
import CircleProgress from "vue3-circle-progress";

import './style.css'
export default {
  components: {
    AtomIcon,
    CircleProgress
  },
  computed: {
    ...mapState(['movieDetail'])
  },
  methods: {
    ...mapActions(['getMovieById']),
    getFormattedDate
  },
  created() {
    this.getMovieById(this.$route.params.id)
    console.log();
  }
}
</script>
<style lang="">
    
</style>