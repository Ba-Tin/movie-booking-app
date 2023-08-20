<template lang="">
    <div class="modal d-block" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <MoleculeModalHeader :title="titleName"/>
                <!-- Modal body -->
                <div class="modal-body">
                    <slot name="form-modal"/>
                </div>
                <!-- Modal footer -->
                <MoleculeModalFooter/>
            </div>
        </div>
    </div>
</template>
<script>
import { MoleculeModalHeader, MoleculeModalFooter } from '../molecules'
export default {
    props: {
        titleName: { type: String, required: true }
    },
    components: {
        MoleculeModalHeader, MoleculeModalFooter
    }
}
</script>
<style lang="">
    
</style>