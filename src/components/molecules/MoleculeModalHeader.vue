<template lang="">
   <div class="modal-header">
        <h4 class="modal-title">
            {{title}}
        </h4>
        <MoleculeButtonIcon className="bg-white" @click="closeModal" iconName="bx bx-x icon-close">Hủy bỏ</MoleculeButtonIcon>
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
<style lang="css" scoped>
.customer-icon {
    color: black;
    font-size: 2rem;
}
</style>