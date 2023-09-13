<template lang="">

   <OrganismHomeSlider/>
   <OrganismCarouselMovie/>
   <MoleculeSchedule title="Lịch chiếu"/>
   <FooterClient/>
</template>
<script>
import { OrganismHomeSlider, OrganismCarouselMovie } from '@/components/organisms'
import { MoleculeSchedule } from '@/components/molecules';
import FooterClient from '../../Footer/FooterClient.vue';

export default {
   components: {
      OrganismHomeSlider,

      OrganismCarouselMovie,
      MoleculeSchedule, FooterClient
   }
}
</script>
<style lang="">
   
</style>