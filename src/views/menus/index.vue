<!--
 Copyright (c) 2023 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="mb-3">
    <button type="button" class="btn btn-primary px-3">
      <i class="fas fa-plus"></i>新增
    </button>
  </div>
  <table class="table table-bordered table-hover table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Menu名稱</th>
        <th scope="col">Menu路徑</th>
        <th scope="col">排序</th>
        <th scope="col">操作策略</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>首頁</td>
        <td>/dashboard</td>
        <td>1</td>
        <td>Read, Update</td>
        <td>
          <button type="button" class="btn btn-secondary px-3">
            <i class="far fa-edit me-2"></i>Edit</button>
          <button type="button" class="btn btn-danger px-3 ms-3">
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
</template>
<script setup lang="ts">
import {} from 'vue';
</script>
<style lang="scss" scoped>

</style>