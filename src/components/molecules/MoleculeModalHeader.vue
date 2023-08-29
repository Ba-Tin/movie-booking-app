<template lang="">
   <div class="modal-header">
        <h4 class="modal-title">
            {{title}}
        </h4>
        <MoleculeButtonIcon typeName="button" className="bg-white" @click="toggleModal" iconName="bx bx-x text-body h2">Hủy bỏ</MoleculeButtonIcon>
    </div>
</template>
<script>
import MoleculeButtonIcon from './MoleculeButtonIcon.vue'
import modalMixin from '@/mixin/modalMixin'
export default {
    props: {
        title: { type: String, required: true }
    },
    components: {
        MoleculeButtonIcon
    },
    mixins: [modalMixin],
}
</script>
<style lang="css" scoped></style>