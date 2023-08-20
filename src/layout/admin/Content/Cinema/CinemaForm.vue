<template lang="">
    <OrganismModal titleName="Thêm">
        <template #form-modal>
            <form  @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
            </form>
        </template>
    </OrganismModal>

    

</template>
<script>
import { OrganismModal } from "@/components/organisms"
export default {
    components: {
        OrganismModal
    },
    methods: {
        submitForm() {
            console.log("hello");
        }
    }
}
</script>
<style lang="">
    
</style>