import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import {resolve} from 'path'
import { fileURLToPath, URL } from "url"
// function pathResolve(dir: string){
//   return resolve(process.cwd(), '.', dir)
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)), // pathResolve('src'),
      '~bootstrap': 'bootstrap'
    }
  },
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
})
