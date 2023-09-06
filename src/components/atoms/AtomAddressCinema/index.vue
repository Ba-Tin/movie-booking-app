<template lang="">
        <div class="local-cinema">
          <div class="local-detail">
            <!-- <div class="movie-img">
                <img :src="logo" alt="" />
             </div> -->
            <div class="address-cinema-items">
              <p class="cinema-name">{{address.name}} <span>- Bitexco</span></p>
              <p class="address-cinema">{{address.address }}</p>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  props: {
    address: { type: Object, required: true },
    // logo: { type: String, required: true }
  },
  mounted() {
    console.log("dádadsasds", this.address);
  }
}
</script>
<style lang="">
    
</style>