<template lang="">
   <OrganismModal titleName="Thêm phim" buttonAction="Thêm" :onSubmit="handleSave">
        <template #form-modal> 
                <div class="form-group">
                    <label for="title">Tên phim</label>
                    <input type="text" class="form-control" id="title" placeholder="Tên phim">
                </div>
                <div class="form-group">
                    <label for="trailer">Trailer</label>
                    <input type="text" class="form-control" id="trailer" placeholder="trailer">
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <div class="d-flex">
                        <img :src="imagePreview" alt="Movie" class="" />
                        <input type="file" accept="image/*" hidden class="form-control-file" id="image">
                        <label for="image" class="btn btn-primary ml-5">Thêm ảnh</label>
                    </div>
                </div>
                 <div class="form-group">
                    <label for="date">Ngày khỏi chiếu</label>
                    <input type="date" class="form-control" id="date">
                </div>
                 <div class="form-group">
                    <label for="description">Mô tả</label>
                    <textarea class="form-control" id="description"></textarea>
                </div>
        </template>
    </OrganismModal>
</template>
<script>
import { OrganismModal } from "@/components/organisms";
export default {
    components: {
        OrganismModal
    },
    methods: {
        handleSave() {
            console.log("hello nè")
        }
    }
}
</script>
<style lang="">
    
</style>