<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-11 col-sm-8 col-lg-6 col-xl-4 ">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="accountInput" class="form-label">帳號:</label>
          <!-- is-valid -> valid-feedbac  || is-invalid -> invalid-feedback-->
          <input
            v-model="loginInfo.username" type="email" 
            :class="['form-control', {'is-invalid': loginInfoMsg.usernameMsg}]"
            id="accountInput" aria-describedby="accountHelp" required
          >
          <div class="invalid-feedback">{{ loginInfoMsg.usernameMsg }}</div>
        </div>
        <div class="mb-3">
          <label for="passwordInput" class="form-label">密碼:</label>
          <input
            v-model="loginInfo.password"
            type="password"
            :class="['form-control', {'is-invalid': loginInfoMsg.passwordMsg}]"
            id="passwordInput"
            required
          >
          <div class="invalid-feedback">{{ loginInfoMsg.passwordMsg }}</div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">記住我</label>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 text-light" @click="submit">登入</button>
          <router-link to="/reg" class=" w-100 border mt-2 text-decoration-none text-center">
            <button type="submit" class="btn">註冊</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { signin } from '@/api/login';
import { LoginResponse } from '@/types/Login';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/user';

const store = useUserStore()
const router = useRouter()
const loginInfo = reactive({
  username: 'nest-user5',
  password: 'nest-user5',
})
const loginInfoMsg = reactive({
  usernameMsg: computed(( )=> {
    // if(
    //   loginInfo.username !== '' &&
    //   !/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(loginInfo.username)
    // ){
    //   return '請輸入正確Email格式地址!'
    // }
    return ''
  }),
  passwordMsg: computed(( )=> {
    if(loginInfo.password !== '' && loginInfo.password.length < 6){
      return '密碼長度不能小於6位'
    }
    return ''
  }),
})
const submit = async () => {
  const res = await signin(loginInfo) as unknown as LoginResponse // get token
  res.accessToken && store.$patch({ token: res.accessToken })
  router.push({path: '/home'})
}
</script>
<style lang="scss">

</style>