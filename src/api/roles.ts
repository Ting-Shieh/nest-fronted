import axios from '@/utils/axios';

export const getRoles = (params?: any) => axios.get('/roles', params);
