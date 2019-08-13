import { createAction } from '../../utils/utils';
import { actionTypes } from './constants';
import { requestProductByDate, putNewData } from '../../utils/requests';

const addProductByDate = createAction(actionTypes.ADD_PRODUCT_BY_DATE);
const addNewData = createAction(actionTypes.ADD_FETCH_SUCCESS);
export const addAllData = createAction(actionTypes.ADD_ALL_DATA);

export const updateData = (token, data) => dispatch => {
  putNewData(token, data)
    .then(answ => {
      dispatch(addNewData(answ.data.userData));
      return true;
    })
    .catch(err => {
      console.log('Trouble', err);
    });
};

export const getProductByDate = (date, token) => dispatch =>
  requestProductByDate(date, token)
    .then(({ data }) => {
      dispatch(addProductByDate(data.products));
      return true;
    })
    .catch(({ error }) => error);
