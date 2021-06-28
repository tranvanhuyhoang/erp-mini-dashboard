export const API = 'http://localhost:5035/';

const api = {
  login: API + 'api/login',

  //product
  addProduct: API + 'product',
  getListProduct: API + 'product',
  deleteProduct: API + 'product/',
  updateProduct: API + 'product/',

  //customer
  getListCustomers: API + 'customer',
  getListCustomersCare: API + 'customer/get-birth-day-customer'

}

export default api; 