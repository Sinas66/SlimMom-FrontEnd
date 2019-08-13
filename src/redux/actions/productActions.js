import { createAction } from '../../utils/utils';
import { actionTypes } from './constants';
import { requestProductByDate } from '../../utils/requests';

const addProductByDate = createAction(actionTypes.ADD_PRODUCT_BY_DATE);

export const getProductByDate = (date, token) => dispatch =>
  requestProductByDate(date, token)
    .then(({ data }) => {
      dispatch(addProductByDate(data.products));
      return true;
    })
    .catch(({ error }) => error);
