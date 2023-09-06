<template lang="">
  <AtomButton :className="className" :typeName="typeName"> 
    <box-icon :name="iconName" size="lg"></box-icon>
  </AtomButton>
</template>
<script>
import { AtomButton } from '../atoms'
export default {
  components: {
    AtomButton,
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