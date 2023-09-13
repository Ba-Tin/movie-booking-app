<template lang="">

   <OrganismHomeSlider/>
   <OrganismSearchMovie/>
   <OrganismCarouselMovie/>
   <MoleculeSchedule title="Lịch chiếu"/>
   <FooterClient/>
</template>
<script>
import { OrganismHomeSlider, OrganismSearchMovie, OrganismCarouselMovie } from '@/components/organisms'
import { MoleculeSchedule } from '@/components/molecules';
import FooterClient from '../../Footer/FooterClient.vue';

export default {
   components: {
      OrganismHomeSlider,
      OrganismSearchMovie,
      OrganismCarouselMovie,
      MoleculeSchedule, FooterClient
   }
}
</script>
<style lang="">
   
</style>