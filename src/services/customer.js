import * as callApi from '../utils/apiHelper';
import api from '../commons/environtment';

export const getListCustomers = () => {
  const url = api.getListCustomers;
  return callApi.get(url);
  
};

export const getListCustomersCare = (data) => {
  const url = api.getListCustomersCare;
  return callApi.get(url, data);
  
};

// export const deleteProduct = (idProduct) => {
//   const url = api.deleteProduct+idProduct;
//   return callApi.del(url);
// };