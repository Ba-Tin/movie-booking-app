<template lang="">

   <OrganismHomeSlider/>
   <OrganismSearchMovie/>
   <OrganismCarouselMovie/>
   <MoleculeSchedule/>
 
</template>
<script>
import { OrganismHomeSlider, OrganismSearchMovie, OrganismCarouselMovie } from '@/components/organisms'
import { MoleculeSchedule } from '@/components/molecules'

export default {
   components: {
      OrganismHomeSlider,
      OrganismSearchMovie,
      OrganismCarouselMovie,
      MoleculeSchedule
   }
}
</script>
<style lang="">
   
</style>