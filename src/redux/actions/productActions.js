import { DELETE_PRODUCT_FROM_PRODUCTLIST } from './constants';
import { DeleteProdByDay } from '../../utils/requests';

export const deleteProductFromProductListAC = id => ({
  type: DELETE_PRODUCT_FROM_PRODUCTLIST,
  id
});

export const deleteProductFromProductListFunc = (token, id) => {
  return dispatch => {
    DeleteProdByDay(token, id).then(data => {
      if (data.status === 'success') {
        console.log('DATA STATUS', data.status);
        dispatch(deleteProductFromProductListAC(id));
      } else {
        console.log('ERROR');
        dispatch(deleteProductFromProductListAC(id));
        /*раскоментиоровать если сервер не отвечает
        - для проверки удаления из списка */
      }
    });
  };
};
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
