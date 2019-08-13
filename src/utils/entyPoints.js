const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';

export const url = {
  products: () => `${baseUrl}products/`,
  productsByDay: () => `${baseUrl}user/eats/`,
  deleteProductsByDay: () => `${baseUrl}user/eats/`,
  loginUser: () => `${baseUrl}login`,
  registerUser: () => `${baseUrl}register`,
  productsByDate: date => `${baseUrl}user/eats/${date}`,
  userData: () => `${baseUrl}user`
};
