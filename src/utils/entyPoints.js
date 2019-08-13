const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';

export const url = {
  loginUser: () => `${baseUrl}login`,
  registerUser: () => `${baseUrl}register`,
  productsByDate: date => `${baseUrl}user/eats/${date}`,
  userData: () => `${baseUrl}user`,
  products: input => `${baseUrl}products?search=${input}`,
  userEats: () => `${baseUrl}user/eats`
};
