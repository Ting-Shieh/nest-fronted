// Copyright (c) 2023 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createPinia } from 'pinia'
import { App } from 'vue'

const store = createPinia();

export function setupStore(app: App<Element>){
  app.use(store);
}

export {store};