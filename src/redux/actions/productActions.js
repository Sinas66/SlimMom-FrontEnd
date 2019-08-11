import {
  TOOGLE_MODAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_PER_DAY,
  TOOGLE_FETCH_PROD_BY_DAY_LOADER,
  TOOGLE_FETCH_ALL_PROD_LOADER,
  DELETE_PRODUCT_FROM_PRODUCTLIST
} from './constants';
import { fetchAllProducts, fetchProductsByDay, DeleteProdByDay } from '../../utils/requests';

export const toogleModalProductsAction = () => {
  return {
    type: TOOGLE_MODAL_PRODUCTS
  };
};
export const getAllProductsAction = token => dispatch => {
  dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
  fetchAllProducts(token)
    .then(products => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_ALL_PROD_LOADER });
    });
};

export const getProductsByDayAction = (token, day) => dispatch => {
  dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
  fetchProductsByDay(token, day)
    .then(products => {
      dispatch({
        type: GET_PRODUCTS_PER_DAY,
        payload: products
      });
      dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err
      });
      dispatch({ type: TOOGLE_FETCH_PROD_BY_DAY_LOADER });
    });
};

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
        // dispatch(deleteProductFromProductListAC(id));
        /*раскоментиоровать если сервер не отвечает
        - для проверки удаления из списка */
      }
    });
  };
};
