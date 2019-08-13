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

export const putNewData = (token, data) => {
  return axios
    .put(api.url.userData(), { ...data }, setToken(token))
    .then(response => response)
    .catch(err => console.log(err));
};
// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };

export const requestRegister = cred =>
  axios
    .post(api.url.registerUser(), cred)
    // TODO Add error handlers

    .then(data => data)
    .catch(({ error }) => console.log(error));

export const requestLogin = cred =>
  axios
    .post(api.url.loginUser(), cred)
    // TODO Add error handlers

    .then(data => data)
    .catch(({ error }) => console.log(error));

export const requestProductByDate = (date, token) =>
  axios
    .get(api.url.productsByDate(date), setToken(token))
    // TODO Add error handlers
    .then(data => data)
    .catch(({ error }) => console.log(error));

export const requestUserData = token =>
  axios
    .get(api.url.userData(), setToken(token))
    // TODO Add error handlers

    .then(data => data)
    .catch(({ error }) => console.log(error));
