<template lang="">
    <OrganismModal :titleName="formTitle" buttonAction="Thêm" :onSubmit="handleSave">
        <template #form-modal> 
                <div class="form-group">
                    <label for="title">Tên rạp</label>
                    <input type="text" class="form-control" id="title" placeholder="Tên phim">
                </div>
        </template>
    </OrganismModal>
</template>
<script>
import { OrganismModal } from "@/components/organisms";
export default {
    data() {
        return {
            formTitle: "Thêm",
        }
    },
    components: {
        OrganismModal
    },
    methods: {
        handleSave() {
            console.log("hello");
        }
    },
}
</script>
<style lang="">
    
</style>