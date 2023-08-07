<template>
  <div
    class="modal fade"
    ref="editRef"
    tabindex="-1"
    aria-labelledby="EditAndAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="EditAndAddModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Form ref="formRef"></Form>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" >
import {} from 'vue'
</script>