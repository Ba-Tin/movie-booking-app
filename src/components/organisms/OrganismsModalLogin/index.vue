<template lang="">
   <div class="login-box">
    <div class="lb-header">
      <span
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ 'active': activeTab === tab.id }"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.name }}
    </span>
    </div>
   <div v-if="activeTab === 1"><molecule-login/></div>
    <div v-else-if="activeTab === 2"><molecule-register/></div>
  </div>
</template>
<script>
import { MoleculeLogin, MoleculeRegister } from '../../molecules'
import './style.css'
export default {
  components: {
    MoleculeLogin,
    MoleculeRegister
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "Đăng nhập" },
        { id: 2, name: "Đăng ký" },

      ],
      activeTab: 1
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
  }

}
</script>
<style lang="">
    
</style>