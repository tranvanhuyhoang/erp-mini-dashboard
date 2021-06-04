import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';

export const getListProducts = () => {
  const url = api.getListProduct;
  return callApi.get(url);
};