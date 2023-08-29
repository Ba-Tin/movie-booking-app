<template lang="">
    <div class="movie-card">
      <div class="movie-rating">
        <span class="movie-rating-text">{{movieData?.groupId}}</span>
          <div class="move-rating-detail">
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
        <div class="overplay">
          <i class="bx bx-play"></i>
        </div>
            <!-- img slide -->
        <div class="carousel-img">
          <img :src="movieData?.image" class="d-block" alt="..." />
        </div>
        <div class="movie-info">
          <p class="movie-name">{{movieData?.filmName}}</p>
          <p class="movie-timer">130p - 3IMDb</p>
          <div class="buy-ticket">
            <button class="button">Mua vé</button>
          </div>
        </div>
      </div>
      
</template>
<script>
import "./style.css";
import { AtomIcon } from "@/components/atoms"
export default {
  props: {
    movieData: { type: Object, required: true }
  },
  components: {
    AtomIcon
  }



}
</script>
<style lang="">
    
</style>