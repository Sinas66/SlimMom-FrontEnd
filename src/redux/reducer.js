import { combineReducers } from 'redux';
import sessionReducer from './reducers/session';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  data: productReducer
});

export default rootReducer;

// Store example
const session = {
  userName: 'name',
  token: '123'
};

const data = {
  products: {
    data: 'data',
    items: [
      {
        id: '123',
        title: 'some meal',
        ccal: 100,
        weight: 100,
        groupId: '123'
      }
    ]
  },
  results: {
    dailyRate: 3000,
    forbiddenProducts: [
      {
        groupId: '123',
        item: 'Milk'
      },
      {
        groupId: '123',
        item: 'Milk'
      }
    ]
  }
};
