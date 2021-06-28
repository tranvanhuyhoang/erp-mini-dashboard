import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';
import {ACCESS_TOKEN, USER_INFO} from '../commons/constant';

export const login = (data) => {
  const url = api.login;
  return callApi.post(url, data);
};


export const logout =  async () => {
  await localStorage.removeItem(ACCESS_TOKEN);
  await localStorage.removeItem(USER_INFO);
  window.location.href = '/login';
};