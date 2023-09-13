<template lang="">
   <div class="search right">
      <input type="text" placeholder="Nhập tên phim bạn muốn tìm vào đây" />
      <input type="date" name="" />
      <span class="open-button">
        <box-icon name="chevron-down" color="white"></box-icon>
      </span>
      <input type="day" name="" />
      <span class="open-button">
        <box-icon name="chevron-down" color="white"></box-icon>
      </span>
      <atom-button typeName="button" className="button-search">Tìm kiếm</atom-button>
    </div>
</template>
<script>
import "./style.css";
import { AtomButton } from "@/components/atoms"
export default {
  components: {
    AtomButton
  }
}
</script>
<style lang="">
    
</style>