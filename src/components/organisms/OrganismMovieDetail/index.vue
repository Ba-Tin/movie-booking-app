<template lang="">
  <!-- movie detail -->
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
      </div>
   </div>
   <!-- showtime -->
     <div class="showtimes-movies">
      <div class="title">
         <p
            class="tab"
            :class="{ 'active-title': tab === activeTab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="changeTab(tab)"
          >
            {{ tab }}
          </p>
      </div>
      <!-- showtimes-cinema -->
      <div v-if="activeTab === 'Lịch chiếu'">
        <MoleculeSchedule :movie="movieDetail"/>
      </div>
      <!-- end showtimes-cinema -->

      <!-- information movie -->
         <div v-else-if="activeTab === 'Thông tin'">
           <MoleculeDescription :description="movieDetail"/>
          </div>
      <!-- end information movie -->


    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex';

import { getFormattedDate } from "@/utils/dateTime";
import CircleProgress from "vue3-circle-progress";
import { MoleculeSchedule, MoleculeDescription } from "@/components/molecules"
import './style.css'
export default {
  data() {
    return {
      tabs: ['Lịch chiếu', 'Thông tin'],
      activeTab: 'Lịch chiếu',
    };
  },

  components: {
    CircleProgress, MoleculeSchedule, MoleculeDescription
  },
  computed: {
    ...mapState(['movieDetail']),
  },
  methods: {
    getFormattedDate,
    ...mapActions(['getMovieById']),
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
  mounted() {
    this.getMovieById(this.$route.params.filmUrl)
    console.log("movieDetail", this.movieDetail);
  }
}
</script>
<style lang="">
    
</style>