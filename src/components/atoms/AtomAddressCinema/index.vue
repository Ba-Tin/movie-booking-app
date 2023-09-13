<template lang="">
        <div class="local-cinema">
          <div class="local-detail"
              v-for="cinema in address.cinemaAddressList" 
              :key="cinema.id" 
              :class="{ 'active-address': selectedMovie === cinema?.listFilm}"
              @click="onSave(cinema)"
            >
            <div class="movie-img">
                <img :src="address.logo" alt="" />
             </div>
            <div class="address-cinema-items">
              <p class="cinema-name">{{getNameCinema(cinema.name)}} - <span>{{getAddressCinema(cinema.name)}}</span></p>
              <p class="address-cinema">{{cinema.address }}</p>
            </div>
          </div>
        </div>
</template>
<script>
import { getNameCinema, getAddressCinema } from '@/utils/helps'
export default {
  props: {
    address: { type: Object, required: true },
    selectMovie: { type: Function, required: true },
    selectedMovie: { type: Object }
  },
  methods: {
    getNameCinema,
    getAddressCinema,
    onSave(cinema) {
      this.selectMovie(cinema)
    }
  },
}
</script>
<style lang="">
    
</style>