import axios from 'axios';
import { fetchSuccess } from '../redux/actions/productActions';
import * as api from './entyPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const pushNewData = (token, task) => {
  return axios
    .post(api.url.newData(), { ...task }, setToken(token))
    .then(response => {
      return response.json().then(data => dispatch(fetchSuccess(data.session)));
    })
    .catch(err => console.log(err));
};

// Example
// export const fetchCompleteTask = (token, task) => {
//   return axios.post(api.url.updateTask(), { ...task, isDone: true }, setToken(token)).catch(err => console.log(err));
// };
