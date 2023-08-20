<template lang="">
    <div v-for="(item,index) in table" :key="index">
      <OrganismDataTable :datas="item">
         <template v-slot:button-add>
            <atom-button className="btn-add" @click="closeModal">Thêm</atom-button>
            <div class="py-4">
                <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
            </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" className="customer-btn"  iconName="bx bxs-edit"/>
            <MoleculeButtonIcon :row="row" className="customer-btn" iconName="bx bxs-trash"/>
        </template>
     </OrganismDataTable>
   </div>
   <cinema-form v-if="showModal"/>
</template>
<script>
import { mapState } from 'vuex';
import { OrganismDataTable } from '@/components/organisms';
import { MoleculeButtonIcon } from '@/components/molecules';
import { AtomButton } from '@/components/atoms';
import CinemaForm from './CinemaForm.vue';
import modalMixin from '@/mixin/modalMixin'

export default {
    data() {
        return {
            table: [
                {
                    title: "Danh sách rạp",
                    tableColumns: [
                        { key: "tenrap", label: "Tên Rạp" },


                    ],
                    tableData: [
                        { id: 1, name: "John Doe", age: 28, bala: "hahaha" },
                        { id: 2, name: "Jane Smith", age: 35, bala: "hahaha" },
                        { id: 3, name: "eSmith", age: 35, bala: "hahaha" },

                    ],
                }
            ],

        }
    },
    components: {
        OrganismDataTable, AtomButton, MoleculeButtonIcon, CinemaForm
    },
    computed: {
        ...mapState(['showModal'])
    },
    mixins: [modalMixin],


}
</script>
<style lang="css" scoped>
.btn-add {
    background: #7367f0;
    color: #fff;
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    border-radius: 10px;
}
</style>