// Copyright (c) 2023 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useUserStore } from "@/store/user";
import axios from "axios";

const store = useUserStore()

const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 60000,
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (store.token) {
    config.headers.Authorization = `Bearer ${store.token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.status.toString().startsWith('2')) {
    return response.data
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;