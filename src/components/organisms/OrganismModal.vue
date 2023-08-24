<template lang="">
    <div class="modal d-block">
        <div class="modal-dialog">
            <div class="modal-content">
                 <form @submit.prevent="onSave">
                    <!-- Modal Header -->
                    <MoleculeModalHeader :title="titleName"/>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <slot name="form-modal"/>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <AtomButton typeName="submit" className="btn btn-primary">{{buttonAction}}</AtomButton>
                        <AtomButton typeName="button" className="btn btn-danger" @click="toggleModal">Hủy bỏ</AtomButton>
                    </div>
                 </form>
            </div>
        </div>
    </div>
</template>
<script>
import { MoleculeModalHeader } from '../molecules';
import { AtomButton } from '../atoms';
import modalMixin from '@/mixin/modalMixin'


export default {
    props: {
        titleName: { type: String, required: true },
        buttonAction: { type: String, required: true },
        onSubmit: {
            type: Function,
            required: true
        }
    },
    components: {
        MoleculeModalHeader,
        AtomButton
    },
    methods: {
        onSave() {
            this.onSubmit()
        }
    },
    mixins: [modalMixin],

}
</script>
<style lang="">
    
</style>