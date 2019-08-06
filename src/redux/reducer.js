import { combineReducers } from 'redux';
import sessionReducer from './reducers/session';
import productReducer from './reducers/productReducer';
import resultReduser from './reducers/resultReduser';

const rootReducer = combineReducers({
  session: sessionReducer,
  data: productReducer,
  result: resultReduser
});

export default rootReducer;

// Store example
const session = {
  user: {
    groupBlood: 1,
    nickname: 'name',
    dailyRate: 3000
  },
  token: '123'
};

const products = {
  date: 'date',
  items: [
    {
      id: '123',
      title: 'some meal',
      ccal: 4000,
      weight: 960,
      groupBloodNotAllowed: {
        '1': true,
        '2': false,
        '3': true,
        '4': false
      }
    }
  ]
};
