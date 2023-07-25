/// <reference types="vite/client" />
declare module '*.vue' {
  // import type { ComponentOptions, DefineComponent } from "vue";
  // const component: ComponentOptions | ['setup']
  // export default component
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}