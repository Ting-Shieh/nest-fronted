<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="">
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">用户名</th>
          <th scope="col">角色</th>
          <th scope="col">性别</th>
          <th scope="col">大頭</th>
          <th scope="col">Email</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.username }}</td>
          <td>{{ item.roles?.map(o => o.name).join(',') }}</td>
          <td>{{ item.profile?.gender }}</td>
          <td>{{ item.profile?.photo }}</td>
          <td>{{ item.profile?.address }}</td>
          <td>
            <button
              type="button"
              class="btn btn-secondary px-3"
            >
              <i class="far fa-edit me-2"></i>Edit
            </button>
            <button
              type="button"
              class="btn btn-danger px-3 ms-3"
            >
              <i class="far fa-trash-alt me-2"></i>Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import axios from '@/utils/axios';
import { onMounted, ref } from 'vue';
interface Profile {
  gender: number;
  address: string;
  photo: string;
}

interface RoleItem {
  id: number;
  name: string;
}

interface UserItem {
  id: number;
  username: string;
  password?: string;
  profile: Profile;
  roles: RoleItem[];
}
const list = ref([] as UserItem[])
async function init() {
  list.value = await axios.get('/user') as UserItem[];
}

onMounted(async () => {
  await init();
})
</script>
<style lang="scss" scoped>

</style>