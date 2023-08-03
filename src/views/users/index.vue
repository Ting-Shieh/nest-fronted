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
import { onMounted, ref, reactive } from 'vue';
import { FormItem, UserItem } from '@/types/User';

const list = ref([] as UserItem[])
const tmpItem = ref({} as UserItem);

const formSchema = reactive([
      {
        field: '用户名',
        type: 'input',
        prop: 'username',
        value: '',
        attr: {
          placeholder: '请输入用户名',
        },
      },
      {
        field: '密码',
        type: 'input',
        prop: 'password',
        value: '',
        attr: {
          placeholder: '请输入登录密码',
        },
      },
      {
        field: '角色',
        type: 'checkbox',
        prop: 'roles',
        value: [],
        children: [
          {
            value: 1,
            field: '普通用户',
          },
          {
            value: 2,
            field: '管理员',
          },
          {
            value: 3,
            field: '测试用户',
          },
        ],
      },
      {
        field: '性别',
        type: 'radio',
        prop: 'gender',
        value: 0,
        children: [
          {
            value: 1,
            field: '男',
          },
          {
            value: 2,
            field: '女',
          },
        ],
      },
      {
        field: '头像',
        type: 'input',
        prop: 'photo',
        value: '',
        attr: {
          placeholder: '请输入头像链接',
        },
      },
      {
        field: '地址',
        type: 'input',
        prop: 'address',
        value: '',
        attr: {
          placeholder: '请输入地址',
        },
      },
    ] as FormItem[]);

async function init() {
  list.value = await axios.get('/user') as UserItem[];
}

onMounted(async () => {
  await init();
})
</script>
<style lang="scss" scoped>

</style>