<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-4 ">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">帳號:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密碼:</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">記住我</label>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 text-light">登入</button>
          <router-link to="/reg" class=" w-100 border mt-2 text-decoration-none text-center">
            <button type="submit" class="btn">註冊</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">

</style>