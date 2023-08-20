<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
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
        <th scope="col">角色名稱</th>
        <th scope="col">分配權限</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>管理员</td>
        <td></td>
        <td>
          <button type="button" class="btn btn-secondary px-3" @click="openModal('edit', item)">
            <i class="far fa-edit me-2"></i>Edit</button>
          <button type="button" class="btn btn-danger px-3 ms-3" @click="openModal('delete', item)">
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

</template>
<script setup lang="ts">
import DeleteModal from '@/components/modal/DeleteModal.vue';
import EditAddModal from '@/components/modal/EditAddModal.vue';
import { FormItem } from '@/types/Form'
import { ref } from 'vue'

const deleteShow = ref(false)
const editShow = ref(false)
const msg = ref<'Add'|'Edit'>('Add')
const formSchema = [
      {
        field: "角色名稱",
        type: "input",
        prop: "username",
        value: "",
        attr: {
          placeholder: "please输入角色名稱",
        },
      },
      {
        field: "Menu 1",
        type: "checkbox",
        prop: "roles",
        value: [],
        children: [
          {
            value: 1,
            field: "CREATE",
          },
          {
            value: 2,
            field: "UPDATE",
          },
          {
            value: 3,
            field: "DELETE",
          },
          {
            value: 4,
            field: "READ",
          },
          {
            value: 5,
            field: "MANAGE",
          },
        ],
      },
      {
        field: "Menu 2",
        type: "checkbox",
        prop: "roles1",
        value: [],
        children: [
          {
            value: 1,
            field: "CREATE",
          },
          {
            value: 2,
            field: "UPDATE",
          },
          {
            value: 3,
            field: "DELETE",
          },
          {
            value: 4,
            field: "READ",
          },
          {
            value: 5,
            field: "MANAGE",
          },
        ],
      },
    ] as FormItem[];


// 删除该条数据
const deleteSubmit = async () => {
  deleteShow.value = false
}

const editAddSubmit = (data: any) => {
  console.log('index => ',data)
}

const openModal = (type: string, item?: any) => {
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
</script>
<style lang="scss" scoped>

</style>