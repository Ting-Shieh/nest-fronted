// Copyright (c) 2023 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export interface Profile {
  gender: number;
  address: string;
  photo: string;
}

export interface RoleItem {
  id: number;
  name: string;
}

export interface UserItem {
  id: number;
  username: string;
  password?: string;
  profile: Profile;
  roles: RoleItem[];
}

export interface FormItem {
  field: string;
  type: 'input' | 'checkbox' | 'radio';
  prop: string;
  attr?: {
    placeholder: string;
  };
  value?: string | number | Record<string, any>[] | { [key: string]: any };
  children?: Array<any>;
}