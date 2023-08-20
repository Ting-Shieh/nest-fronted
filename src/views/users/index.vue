<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="">
    <div class="mb-3">
      <button
        type="button"
        class="btn btn-primary px-3"
        @click="openModal('add')"
      >
        <i class="fas fa-plus"></i>新增
      </button>
    </div>
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
              @click="openModal('edit', item)"
            >
              <i class="far fa-edit me-2"></i>Edit
            </button>
            <button
              type="button"
              class="btn btn-danger px-3 ms-3"
              @click="openModal('delete', item)"
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
    <delete-modal v-model:show="deleteShow" @delete="deleteSubmit" />
    <EditAddModal v-model:show="editShow" :msg="msg" :schema="formSchema" @submit="editAddSubmit"/>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { UserItem } from '@/types/User';
import { getAllUsers } from '@/api/user';
import { FormItem } from '@/types/Form'
import DeleteModal from '@/components/modal/DeleteModal.vue';
import EditAddModal from '@/components/modal/EditAddModal.vue';

const deleteShow = ref(false)
const editShow = ref(false)
const list = ref([] as UserItem[])
const tmpItem = ref({} as UserItem)
const msg = ref<'Add'|'Edit'>('Add')
const formSchema: FormItem[] = reactive(
  [
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
          field: 'Admin',
        },
        {
          value: 2,
          field: 'User',
        },
        {
          value: 3,
          field: 'Test',
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
          value: 'M',
          field: '男',
        },
        {
          value: 'F',
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
  ]
);

async function init() {
  list.value = (await getAllUsers()) as unknown as UserItem[];
}

const deleteSubmit = async () => {
  deleteShow.value = false
}

const editAddSubmit = (data: any) => {
  console.log('index => ',data)
}

const openModal = (type: string, item?: UserItem) => {
  if (type === 'delete') {
    deleteShow.value = true;
  } else if (type === 'edit') {
    msg.value = 'Edit'
    editShow.value = true;
  } else if (type === 'add') {
    msg.value = 'Add';
    editShow.value = true;
  }
}
onMounted(async () => {
  await init();
})
</script>
<style lang="scss" scoped>

</style>