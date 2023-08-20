<template>
  <div
    v-for="(item, index) in schema"
    :key="index"
  >
    <!-- schema(json) -> form結構 -> 動態形成form表單組件 -->
    <!-- input -->
    <div class="mb-3" v-if="item.type === 'input'">
      <label
        for="exampleFormControlInput1"
        class="form-label"
      >
        {{ item.field }}
      </label>
      <input
        type="username"
        class="form-control"
        :placeholder="item.attr ? item.attr.placeholder : ''"
        v-model="model[item.prop]"
      />
    </div>
    <!-- checkbox -->
    <div class="mb-3" v-else-if="item.type === 'checkbox'">
      <label
        for="exampleFormControlInput1"
        class="form-label"
      >
        {{ item.field }}
      </label>
      <div class="form-control border-0">
        <div
          class="form-check form-check-inline"
          v-for="(citem, cidx) in item.children"
          :key="cidx"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="citem.value"
            :id="citem.id"
            v-model="model[item.prop]"
          />
          <label
            class="form-check-label"
            :for="citem.id"
          >
            {{ citem.field }}
          </label>
        </div>
      </div>
    </div>
    <!-- radio -->
    <div class="mb-3" v-else-if="item.type === 'radio'">
      <label
        for="exampleFormControlInput1"
        class="form-label"
      >
        {{ item.field }}
      </label>
      <div class="form-control border-0">
        <div
          class="form-check form-check-inline"
          v-for="(ritem, ridx) in item.children"
          :key="ridx"
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            :id="ritem.id"
            :value="ritem.value"
            v-model="model[item.prop]"
          />
          <label
            class="form-check-label"
            :for="ritem.id"
          >
          </label>
        </div>
      </div>
    </div>
    <!-- 扩展其他的schema组件 -->
  </div>
</template>
<script lang="ts" setup>
import { FormItem } from '@/types/Form'
import { toRefs, watch, ref, onMounted, defineExpose} from 'vue'
import { cloneDeep} from 'lodash-es'

const props = withDefaults(defineProps<{
  msg: string
  schema: FormItem[]
}>(), {
  msg: '11111',
  schema: () => [
    // {
    //   field: '',
    //   type: 'input',
    //   prop: '',
    //   attr?: {
    //     placeholder: '',
    //   },
    //   value?: '',
    //   children?: [],
    // }
  ]
})
const {msg} = toRefs(props)
const emit = defineEmits<{
  (event: 'change', schemaData: any): void,
}>()

// 本地局部變量
//  ref({
//   [prop]: item.value
//  })
const rand = () => {
  return Math.random().toString(36).substring(2);
}
const model = ref<any>({
  ...cloneDeep(
    // 先前值, 當前值
    props.schema.reduce((prev, cur) => {
      prev[cur.prop] = cur.value
      if (['radio', 'checkbox'].includes(cur.type)) {
        cur.children?.forEach((o) => {
          o.id = rand();
        });
      }
      return prev
    }, {} as Record<string, any>)
  )
})

 // 傳遞出去
 watch(
  () => model.value,
  () => {
    emit('change', model.value)
  },
  {
    deep: true,
  }
 )
 // 清空 Form
 const clearForm = () => {

  console.log('Form cpt -> clearForm()')
  model.value = cloneDeep(
    props.schema.reduce((prev, cur) => {
      prev[cur.prop] = cur.value
      return prev
    }, {} as Record<string, any>)
  )
 }
 defineExpose({clearForm})
 onMounted(()=>{
  console.log('Form props:', props.schema)
 })
</script>
