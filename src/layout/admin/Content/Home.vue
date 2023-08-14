<template lang="">
   <div class="customer-home"  v-for="(item,index) in table" :key="index">
      <MoleculeDataTableHeader :datas="item"/>
   </div>
</template>
<script>
import MoleculeDataTableHeader from '@/components/molecules/MoleculeDataTableHeader.vue';
export default {
   data() {
      return {
         table: [
            {
               title: "Discovery",
               tableColumns: [
                  { key: "name", label: "Name" },
                  { key: "age", label: "Age" },
                  { key: "bala", label: "Bala" },

               ],
               tableData: [
                  { id: 1, name: "John Doe", age: 28, bala: "hahaha" },
                  { id: 2, name: "Jane Smith", age: 35, bala: "hahaha" },
                  { id: 3, name: "eSmith", age: 35, bala: "hahaha" },

               ],
            },
            {
               title: "Commin soon",
               tableColumns: [
                  { key: "name", label: "Name" },
                  { key: "age", label: "Age" },
                  { key: "bala", label: "Bala" },

               ],
               tableData: [
                  { id: 1, name: "John Doe", age: 28, bala: "hahaha" },
                  { id: 2, name: "Jane Smith", age: 35, bala: "hahaha" },
                  { id: 3, name: "eSmith", age: 35, bala: "hahaha" },

               ],
            },

         ]

      };
   },
   components: {
      MoleculeDataTableHeader
   }
}

</script>
<style lang="css" scoped>
.customer-home {

   padding: 1rem 0.5rem;
   background: var(--bg-blue);
   border-radius: 10px;
   margin-bottom: 1.5rem;
}
</style>