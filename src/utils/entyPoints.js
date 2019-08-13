const baseUrl = 'https://slim-moms.goit.co.ua/api/v1/';

export const url = {
  dataUser: () => `${baseUrl}user`,
  loginUser: () => `${baseUrl}login`,
  registerUser: () => `${baseUrl}register`,
  productsByDate: date => `${baseUrl}user/eats/${date}`,
  userData: () => `${baseUrl}user`
};
