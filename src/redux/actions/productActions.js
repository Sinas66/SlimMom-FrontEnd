import { ADD_FETCH_SUCCESS } from './constants';
import { putNewData } from '../../utils/requests';

export const fetchSuccess = data => ({
  type: ADD_FETCH_SUCCESS,
  payload: data
});

export const updateData = (token, data) => dispatch => {
  putNewData(token, data)
    .then(answ => {
      console.log(answ);
      // dispatch(fetchSuccess(answ.user));
    })
    .catch(err => {
      console.log('Trouble', err);
      // TOdO Dispatch , action to add in store to render error message
    });
};

// export const asyncCreateNew = (userData, token) => dispatch => {
//   fetch(`https://slim-moms.goit.co.ua/api/v1`, {
//     method: 'POST',
//     body: JSON.stringify(userData),
//     headers: {
//       'content-type': 'application/json',
//       Authorization: token
//     }
//   })
//     .then(response => {
//       response.json().then(data => {
//         dispatch(fetchSuccess(data.result));
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
