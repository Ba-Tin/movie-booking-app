<template lang="">
    <form @submit.prevent="onSubmit">
      <div class="title">
        <box-icon name="vuejs" type="logo" color="#ff6e00" size="32px"></box-icon>
        <h3>Vuexy</h3>
      </div>
      <h3>Welcome to 147 Movie</h3>
      <label>Please sign-in your account and start the adventure</label>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email"/>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password"/>
      <span>
        <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
      </span>
      <button v-if="!isPending" type="submit" class="btn-login">Đăng nhập</button>
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
    <div v-if="error">{{error}}</div>
</template>
<script>
import "./style.css"
import { ref } from "vue"
import { useSignIn } from "@/mixin/User/useSignIn"
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signIn(email.value, password.value)
      if (!error.value)
        router.push({ name: "Home", params: {} });
    }

    return { email, password, error, isPending, onSubmit }
  }
}
</script>
<style lang="">
    
</style>