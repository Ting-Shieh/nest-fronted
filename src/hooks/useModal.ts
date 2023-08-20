import { ref, getCurrentInstance, onMounted, Ref, watch } from 'vue'
import * as bootstrap from 'bootstrap';

/**
 * 1.定義modal與modalRef
 * 2.初始化modal
 * 3.定義hide與show方法
 * 4.返回一個show顯示與否的狀態量
 */
export function useModal (refValue: Ref<boolean>, key: string) {
  // 1.定義modal與modalRef
  const modalRef = ref()
  const modal = ref() // 實例
  const vm = getCurrentInstance()

  onMounted(() => {
    // 2.初始化modal
    modal.value = new bootstrap.Modal(modalRef.value, {
      backdrop: true,
    })
    // 監聽事件
    modalRef.value.addEventListener('hidden.bs.modal', function () {
      // 獲取 vue 實例
      vm?.emit(`update:${key}`, false);
    })
  })
  // 監聽屬性值變化
  watch(
    () => refValue.value,
    () => {
      if (refValue.value) {
        show();
      } else {
        hide();
      }
    }
  )
  // 3.定義hide與show方法
  function show() {
    modal.value.show()
  }

  function hide() {
    modal.value.hide()
  }
  // 4.返回一個show顯示與否的狀態量
  return {
    modal,
    modalRef,
    show,
    hide,
  }
}
