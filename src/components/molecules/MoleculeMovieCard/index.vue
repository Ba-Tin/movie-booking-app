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
        <router-link :to="'/movies/' + movieData?.filmUrl">
          <div class="carousel-img">
            <img :src="movieData?.image" class="d-block" alt="..." />
          </div>
         </router-link>
        <div class="movie-info">
          <p class="movie-name">{{movieData?.filmName}}</p>
          <p class="movie-timer">130p - 3IMDb</p>
          <div class="buy-ticket">
            <AtomButton typeName="button" className="button" @click="handleBookTicket(movieData)">Mua vé</AtomButton>
          </div>
        </div>
      </div>
      
</template>
<script>
import "./style.css";
import { AtomButton } from "@/components/atoms";
import { useUser } from "@/mixin/User/useUser";
import { useRouter } from 'vue-router';

export default {
  props: {
    movieData: { type: Object, required: true }
  },
  setup() {
    const router = useRouter();
    const { getUser } = useUser();
    const user = getUser();
    const handleBookTicket = (movieData) => {
      if (user) {
        router.push({ name: 'Booking', params: { filmUrl: movieData.filmUrl } })
      } else {
        router.push({ name: 'Login' });
      }
    }

    return { user, handleBookTicket }
  },
  components: {
    AtomButton
  },

}
</script>
<style lang="">
    
</style>