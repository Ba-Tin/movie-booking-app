<template lang="">
   <OrganismModal titleName="Thêm phim" buttonAction="Thêm" :onSubmit="handleSave">
        <template #form-modal> 
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput2">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
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