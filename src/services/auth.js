import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';

export const login = (data) => {
  const url = api.login;
  return callApi.post(url, data);
};