<template>
  <!-- Delete Modal -->
  <div class="modal fade" ref="deleteRef" tabindex="-1" aria-labelledby="DeleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="DeleteModalLabel">删除</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          确定删除该记录吗？
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cancel()">取消</button>
          <button type="button" class="btn btn-primary" @click="deleteSubmit()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
import { useModal } from "@/hooks"

// // 法1
// const props = defineProps<{
//   show: {
//     type: Boolean,
//     default: false,
//   }
// }>()
// const { show } = toRefs(props)

// with default value
interface Props {
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  show: false
})
const { show } = toRefs(props)
const { modalRef: deleteRef, hide } = useModal(show, "show")

const emit = defineEmits<{
  (event: 'delete'): void,
}>()
const deleteSubmit = async () => {
  emit("delete");
};
const cancel = () => {
  hide()
}
</script>
