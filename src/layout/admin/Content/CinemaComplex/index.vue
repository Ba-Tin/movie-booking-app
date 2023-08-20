<template lang="">
    <div v-for="(item,index) in table" :key="index">
        <OrganismDataTable :datas="item">
         <template v-slot:button-add>
            <atom-button className="btn-add">Thêm</atom-button>
            <div class="py-4">
                <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
            </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" className="customer-btn"   iconName="bx bxs-edit"/>
            <MoleculeButtonIcon :row="row" className="customer-btn" iconName="bx bxs-trash"/>
        </template>
     </OrganismDataTable>
   </div>
</template>
<script>
import OrganismDataTable from '@/components/organisms/OrganismDataTable.vue';
import { MoleculeButtonIcon } from '@/components/molecules';
import { AtomButton } from '@/components/atoms'
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
        OrganismDataTable, AtomButton, MoleculeButtonIcon
    },

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