<template lang="">
   <OrganismModal titleName="Thêm phim" buttonAction="Thêm" :onSubmit="handleSave">
        <template #form-modal> 
              <div class="form-group">
                    <label for="movie">Chọn phim</label>
                    <select class="form-control" id="movie">
                        <option>Tên phim</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="movie">Chọn cụm rạp</label>
                    <select class="form-control" id="movie">
                        <option>Tên cụm rạp</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="movie">Chọn rạp</label>
                    <select class="form-control" id="movie">
                        <option>Tên rạp</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="date">Ngày chiếu</label>
                    <input type="date" class="form-control" id="date">
                </div>
                 <div class="form-group">
                    <label for="time">Giờ chiếu</label>
                    <input type="time" class="form-control" id="time">
                </div>
                  <div class="form-group">
                    <label for="ticket">Giá vé</label>
                    <input type="number" class="form-control" id="ticket">
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