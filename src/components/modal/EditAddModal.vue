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
          <h5 class="modal-title" id="EditAndAddModalLabel">{{ msg }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form-cmp ref="formRef" @change="change" :schema="schema"></form-cmp>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="cancel"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="submit()"
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useModal } from '@/hooks';
import { FormItem } from '@/types/Form'
import FormCmp from '@/components/Form.vue'
import { PropType, ref, toRefs, onMounted } from 'vue'
// import type {PropType} from 'vue'
const props = withDefaults(defineProps<{
  show: boolean,
  msg: 'Add' | 'Edit',
  schema: FormItem[],
}>(), {
  show: false,
  msg: 'Add',
  schema: () => []
    // {
    //   field: '',
    //   type: 'input',
    //   prop: '',
    //   attr: {
    //     placeholder: '',
    //   },
    //   value: '',
    //   children: [],
    // }
  // ]
})
const emit = defineEmits<{
  (event: 'submit', data: any): void,
}>()
const { show,schema } = toRefs(props)
const { modalRef: editRef, hide } = useModal(show, "show")

const formRef = ref()
const formData = ref()
const cancel = () => {
  hide()
}
// 确定
const submit = () => {
  emit('submit', formData.value);
  hide();
  formData.value = {};
  formRef.value?.clearForm();
}

const change = (schemaData: any) => {
  formData.value = schemaData
  console.log('schemaData:', schemaData)
}
onMounted(()=>{
  console.log('props:', props.schema)
})
</script>
