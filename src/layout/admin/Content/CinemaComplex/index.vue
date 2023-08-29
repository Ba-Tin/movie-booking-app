<template lang="">
    <div v-for="(item,index) in table" :key="index">
        <OrganismDataTable :datas="item">
         <template v-slot:button-add>
            <atom-button typeName="button" className="btn-add"  @click="toggleModal">Thêm</atom-button>
            <div class="py-4">
                <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
            </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn"   iconName="bx bxs-edit h2"/>
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn" iconName="bx bxs-trash h2"/>
        </template>
     </OrganismDataTable>
   </div>
   <cinema-complex-form v-if="showModal"/>
</template>
<script>
import OrganismDataTable from '@/components/organisms/OrganismDataTable.vue';
import { MoleculeButtonIcon } from '@/components/molecules';
import { AtomButton } from '@/components/atoms';
import modalMixin from '@/mixin/modalMixin'
import CinemaComplexForm from './CinemaComplexForm.vue';
export default {
    data() {
        return {
            table: [
                {
                    title: "Danh sách cụm rạp",
                    tableColumns: [
                        { key: "tencumrap", label: "Tên cụm rạp" },
                    ],
                    tableData: [
                        { id: 1, tencumrap: "John Doe" },
                        { id: 2, tencumrap: "John Doe" },
                        { id: 3, tencumrap: "John Doe" },

                    ],
                }
            ]
        }
    },
    components: {
        OrganismDataTable, AtomButton, MoleculeButtonIcon, CinemaComplexForm
    },
    mixins: [modalMixin],


}
</script>
<style lang="css" scoped></style>