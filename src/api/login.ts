import axios from '@/utils/axios'
import { LoginForm } from '@/types/Login'

export const signin = (dto: LoginForm, ...options: any) => axios.post('/auth/signin', {...dto, ...options})
export const signup = (dto: LoginForm) => axios.post('/auth/signup', dto)
