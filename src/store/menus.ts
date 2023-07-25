// Copyright (c) 2023 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { MenuItem } from "@/types/SidebarNav";
import { defineStore } from "pinia";

export const userMenusStore = defineStore('menu', {
  state: () => ({
    menus: [
      {
        id: 1,
        name: '首頁',
        path: '/home',
      },
      {
        id: 2,
        name: 'Menus Mgt',
        path: '/home/menus',
        routeName: 'menusIndex'
      },
      {
        id: 3,
        name: 'Users Mgt',
        path: '/home/users',
        routeName: 'usersIndex'
      },
      {
        id: 4,
        name: 'Roles Mgt',
        path: '/home/roles',
        routeName: 'rolesIndex'
      },
    ] as MenuItem[]
  })
})