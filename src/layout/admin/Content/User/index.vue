<template lang="">
    <div v-for="(item,index) in table" :key="index">
       <OrganismDataTable :datas="item">
         <template v-slot:button-add>
            <atom-button typeName="button" @click="toggleModal" className="btn-add" >Thêm</atom-button>
            <div class="py-4">
                <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
            </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn"   iconName="edit"/>
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn" iconName="trash"/>
        </template>
     </OrganismDataTable>
     <user-form v-if="showModal"/>
   </div>
</template>
<script>
import OrganismDataTable from '@/components/organisms/OrganismDataTable.vue';
import { MoleculeButtonIcon } from '@/components/molecules';
import { AtomButton } from '@/components/atoms';
import UserForm from './UserForm.vue';
import modalMixin from '@/mixin/modalMixin';
export default {
    data() {
        return {
            table: [
                {
                    title: "Danh sách người dùng",
                    tableColumns: [
                        { key: "name", label: "Tài khoản" },
                        { key: "age", label: "Họ tên" },
                        { key: "bala", label: "Email" },
                        { key: "bala", label: "Số điện thoại" },
                        { key: "bala", label: "Người dùng" },
                    ],
                    tableData: [
                        { id: 1, name: "John Doe", age: 28, bala: "hahaha" },
                        { id: 2, name: "Jane Smith", age: 35, bala: "hahaha" },
                        { id: 3, name: "eSmith", age: 35, bala: "hahaha" },

                    ],
                }
            ]
        }
    },
    components: {
        OrganismDataTable,
        AtomButton,
        MoleculeButtonIcon,
        UserForm
    },
    mixins: [modalMixin],



}
</script>
<style lang="css" scoped></style>