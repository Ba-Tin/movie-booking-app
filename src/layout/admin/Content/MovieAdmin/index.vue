<template lang="">
    <div v-for="(item,index) in table" :key="index">
        <OrganismDataTable :datas="item">
         <template v-slot:button-add>
            <atom-button className="btn-add" @click="toggleModal" typeName="button">Thêm</atom-button>
            <div class="py-4">
                <input type="text" class="p-2 rounded" placeholder="Tìm kiếm"/>
            </div>
        </template>
        <template v-slot:button-action="{ row }">
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn"  iconName="bx bxs-edit"/>
            <MoleculeButtonIcon :row="row" typeName="button" className="customer-btn" iconName="bx bxs-trash"/>
        </template>
     </OrganismDataTable>
     <movie-form v-if="showModal"/>
   </div>
</template>
<script>
import OrganismDataTable from '@/components/organisms/OrganismDataTable.vue';
import { MoleculeButtonIcon } from '@/components/molecules';
import { AtomButton } from '@/components/atoms';
import MovieForm from './MovieForm.vue';
// import { mapState } from 'vuex';
import modalMixin from '@/mixin/modalMixin'

export default {
    data() {
        return {
            table: [
                {
                    title: "Danh sách phim",
                    tableColumns: [
                        { key: "maphim", label: "Mã Phim" },
                        { key: "linktrailer", label: "Link Trailer" },
                        { key: "ngaykhoichieu", label: "Ngày Khởi chiếu" },
                        { key: "danhgia", label: "Đánh giá" },
                        { key: "hinhanh", label: "Hình ảnh" },


                    ],
                    tableData: [{ id: 1, maphim: "John Doe", linktrailer: 28, ngaykhoichieu: "hahaha", danhgia: "5", hinhanh: "Hình ảnh" },
                    { id: 2, maphim: "John Doe", linktrailer: 28, ngaykhoichieu: "hahaha", danhgia: "5", hinhanh: "Hình ảnh" },
                    { id: 3, maphim: "John Doe", linktrailer: 28, ngaykhoichieu: "hahaha", danhgia: "5", hinhanh: "Hình ảnh" },
                    ]
                }
            ]
        }
    },
    components: {
        OrganismDataTable, AtomButton, MoleculeButtonIcon, MovieForm
    },
    mixins: [modalMixin],

}
</script>
<style lang="css" scoped></style>