import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';

export const getListProducts = () => {
  const url = api.login;
  return callApi.get(url);
};