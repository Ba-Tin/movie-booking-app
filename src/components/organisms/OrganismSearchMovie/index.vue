<template lang="">
   <div class="search right">
      <input type="text" placeholder="Nhập tên phim bạn muốn tìm vào đây" />
      <input type="date" name="" />
      <span class="open-button">
        <atom-icon name="bx bxs-chevron-down"></atom-icon>
      </span>
      <input type="date" name="" />
      <span class="open-button">
        <atom-icon name="bx bxs-chevron-down"></atom-icon>
      </span>
      <atom-button typeName="button" className="button-search">Tìm kiếm</atom-button>
    </div>
</template>
<script>
import "./style.css";
import { AtomButton, AtomIcon } from "@/components/atoms"
export default {
  components: {
    AtomButton, AtomIcon
  }
}
</script>
<style lang="">
    
</style>