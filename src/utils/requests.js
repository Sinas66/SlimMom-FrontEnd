import axios from 'axios';
import {} from '../redux/actions/auth';
import * as api from './entyPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const fetchLogOut = token => {
  return axios
    .get(api.url.logOut(), setToken(token))
    .then(resp => {
      console.log(data);
      if (resp.data.status !== 'success') {
        throw new Error('albfkjabflasflk');
      }
    })
    .catch(error => console.log(error));
};

export const putNewData = (token, data) => {
  return axios
    .put(api.url.userData(), { ...data }, setToken(token))
    .then(response => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch(err => console.log(err));
};
// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };

export const requestRegister = cred =>
  axios
    .post(api.url.registerUser(), cred)
    .then(data => data)
    .catch(({ response }) => response);

export const requestLogin = cred =>
  axios
    .post(api.url.loginUser(), cred)
    .then(data => data)
    .catch(({ response }) => response);

export const requestProductByDate = (date, token) =>
  axios
    .get(api.url.productsByDate(date), setToken(token))
    .then(data => data)
    .catch(({ error }) => console.log(error));

export const requestUserData = token =>
  axios
    .get(api.url.userData(), setToken(token))
    .then(data => data)
    .catch(({ error }) => console.log(error));
