<template lang="">
   <OrganismModal titleName="Thêm cụm rạp" buttonAction="Thêm" :onSubmit="handleSave">
        <template #form-modal> 
                <div class="form-group">
                    <label for="title">Tên cụm rạp</label>
                    <input type="text" class="form-control" id="title" placeholder="Tên cụm rạp">
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