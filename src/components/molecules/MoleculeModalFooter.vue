<template lang="">
    <div class="modal-footer">
        <AtomButton type="button" class="btn btn-danger">Lưu</AtomButton>
        <AtomButton type="button" class="btn btn-danger" @click="closeModal">Hủy bỏ</AtomButton>
    </div>
</template>
<script>
import { AtomButton } from '../atoms'
import modalMixin from '@/mixin/modalMixin'

export default {
    components: {
        AtomButton
    },
    mixins: [modalMixin],

}
</script>
<style lang="">
    
</style>