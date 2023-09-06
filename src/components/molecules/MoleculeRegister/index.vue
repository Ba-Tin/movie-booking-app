<template lang="">
    <form @submit.prevent="onSubmit">
      <div class="title">
        <box-icon type='logo' name='vuejs' color="#ff6e00" size="32px"></box-icon>
        <h3>Vuexy</h3>
      </div>
      <h3>Welcome to 147 Movie</h3>
      <label>Please sign-up your account and start the adventure</label>
      <label for="fullName">Họ và tên</label>
      <input type="text" id="fullName" v-model="fullName"/>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email"/>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password"/>
      <button v-if="!isPending" type="submit" class="btn-login">Đăng ký</button>
      <button v-else disable type="button" class="btn-login btn-loading">Loading...</button>

      <div class="or-wrapper">
        <span class="line"></span>
        <span class="or">or</span>
        <span class="line"></span>
      </div>
      <div class="social-icon">
        <div class="icon">
          <box-icon name='facebook' type='logo' ></box-icon>
        </div>
        <div class="icon">
          <box-icon name='google' type='logo' ></box-icon>
        </div>
        <div class="icon">
        <box-icon name='twitter' type='logo' ></box-icon>
        </div>
      </div>
    </form>
    <div v-if="error">
      <span>{{error}}</span>
    </div>
</template>
<script>
// import "./style.css"
import { ref } from "vue";
import { useSignUp } from '@/mixin/User/useSignUp';
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signUp(email.value, password.value, fullName.value);
      if (!error.value)
        router.push({ name: "Home", params: {} });

    }

    return { fullName, email, password, error, isPending, onSubmit }
  }
}
</script>
<style lang="">
    
</style>@/mixin/auth