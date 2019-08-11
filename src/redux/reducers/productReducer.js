import { DELETE_PRODUCT_FROM_PRODUCTLIST } from '../actions/constants';
import { products } from '../../components/DiaryBlock/products.json';

const INITIAL_STATE = {
  isModalProduct: false,
  allProducts: [],
  isAllProductsLoader: false,
  isProductsByDayLoader: false,
  productsByDay: [...products] // УДАЛИТЬ JSON
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_FROM_PRODUCTLIST: {
      const newProduct = state.productsByDay.filter(prod => prod._id !== action.id);
      return { ...state, productsByDay: newProduct };
    }

    default:
      return state;
  }
};
export default productReducer;
