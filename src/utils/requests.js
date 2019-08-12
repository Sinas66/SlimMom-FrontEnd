import axios from 'axios';
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
    .put(api.url.dataUser(), { ...data }, setToken(token))
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
