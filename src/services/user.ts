import request from '@/utils/request';
import { stringify } from 'qs';

export async function getUsername(params): Promise<any> {
  return request(`/api/users?${stringify(params)}`);
}

export async function getUserList(params:any){
  return request(`/api/userList`, {
    method: 'POST',
    data: params,
  });
}



