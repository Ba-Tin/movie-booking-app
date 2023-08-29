<template lang="">
    <div v-for="(item,index) in table" :key="index">
      <OrganismDataTable :datas="item">
         <template v-slot:button-add>
        <div class="form-group mt-4">
            <atom-button className="btn-add" typeName="button" @click="toggleModal">Thêm</atom-button>
            <select class="p-2 rounded ml-4" id="exampleFormControlSelect1">
                <option>Chọn cụm rạp</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="py-4">
            <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
        </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn"  iconName="bx bxs-edit h2"/>
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn" iconName="bx bxs-trash h2"/>
        </template>
     </OrganismDataTable>
   </div>
   <cinema-form v-if="showModal"/>
</template>
<script>
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
    mixins: [modalMixin],


}
</script>
<style lang="css" scoped></style>