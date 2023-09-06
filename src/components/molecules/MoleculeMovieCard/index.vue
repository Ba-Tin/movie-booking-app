<template lang="">
    <div class="movie-card">
      <div class="movie-rating">
        <span class="movie-rating-text">{{movieData?.groupId}}</span>
          <div class="move-rating-detail">
              <span class="movie-rating-number">{{movieData?.rating === 0 ? 'Chưa có đánh giá' : movieData?.rating}}</span>
                <span class="movie-rating-icon">
                 <box-icon
                    v-for="index in 5"
                    :key="index"
                    name="star"
                    type="solid"
                    color="orange"
                  ></box-icon>
                  </span>
            </div>
        </div>
        <a :href="movieData.trailer" target="_blank">
          <div class="overplay">
            <box-icon name="play" color="white" size="sm"></box-icon>
          </div>
        </a>
            <!-- img slide -->
        <router-link :to="'/movies/' + movieData.id">
          <div class="carousel-img">
            <img :src="movieData?.image" class="d-block" alt="..." />
          </div>
         </router-link>
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


export default {
  props: {
    movieData: { type: Object, required: true }
  },
}
</script>
<style lang="">
    
</style>