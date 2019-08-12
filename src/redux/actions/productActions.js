import { ADD_FETCH_SUCCESS } from './constants';
import { putNewData } from '../../utils/requests';

export const fetchSuccess = data => ({
  type: ADD_FETCH_SUCCESS,
  payload: data
});

export const updateData = (token, data) => dispatch => {
  putNewData(token, data)
    .then(answ => {
      dispatch(fetchSuccess(answ.userData));
    })
    .catch(err => {
      console.log('Trouble', err);
    });
};
