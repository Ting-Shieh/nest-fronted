// Copyright (c) 2023 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/reg',
    component: () => import('@/views/reg.vue'),
  },
] as RouteRecordRaw[];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export function setupRouter(app: App<Element>){
  app.use(router);
}