import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';

export const getListProducts = () => {
  const url = api.getListProduct;
  return callApi.get(url);
};

export const addProduct = (data) => {
  const url = api.addProduct;
  return callApi.uploadFile(url, data);
};

export const deleteProduct = (idProduct) => {
  const url = api.deleteProduct+idProduct;
  return callApi.del(url);
};

export const updateProduct = (data) => {
  const url = api.updateProduct+data.idProduct;
  return callApi.put(url, data);
};

