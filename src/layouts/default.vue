<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <menu-nav  :menus="store.menus"/>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="container-fluid">
            <!-- Header -->
            <header-nav></header-nav>
            <!-- Main -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderNav from './components/default/HeaderNav.vue';
import MenuNav from './components/default/MenuNav.vue';
import {} from 'vue';
import { userMenusStore } from '../store/menus';

const store = userMenusStore()
</script>
<style lang="scss" scoped>

</style>
