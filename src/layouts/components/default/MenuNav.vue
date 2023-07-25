<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <ul class="nav flex-column">
    <li v-for="item in menus" :key="item.id" class="nav-item">
      <router-link
        class="nav-link"
        :to="item.routeName? {name: item.routeName}:item.path"
      >{{ item.name }}</router-link>
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'usersIndex'}">users</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'menusIndex'}">menus</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'rolesIndex'}">roles</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li> -->
  </ul>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { MenuItem } from '@/types/SidebarNav';

defineProps({
  menus: {
    type: Array as PropType<Array<MenuItem>>,
    default: () => [] as MenuItem[],
  }
})
</script>
<style lang="scss" scoped>

</style>