<template lang="">
  <AtomButton :className="className" :typeName="typeName"> 
    <AtomIcon :name="iconName" />
  </AtomButton>
</template>
<script>
import { AtomButton, AtomIcon } from '../atoms'
export default {
  components: {
    AtomButton,
    AtomIcon
  },
  props: {
    className: String,
    iconName: String,
    typeName: String
  },
}
</script>
<style lang="css" scoped>
.customer-btn {
  background: #25293c;
  margin-right: 1rem
}
</style>