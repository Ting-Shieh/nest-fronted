/// <reference types="vite/client" />
declare module '*.vue' {
  import type { ComponentOptions, DefineComponent } from "vue";
  const component: ComponentOptions | ['setup']
  export default component
}