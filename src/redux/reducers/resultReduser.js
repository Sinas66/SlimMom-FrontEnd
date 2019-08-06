import { STORE_ADD, ADD_FETCH_SUCCESS } from '../actions/constants';

const INITIAL_STATE = {};

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case STORE_ADD:
      return { ...state, item: payload };
    case ADD_FETCH_SUCCESS:
      return { ...state, item: payload };
    default:
      return state;
  }
};
export default productReducer;
