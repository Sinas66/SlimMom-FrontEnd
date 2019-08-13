import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: 'name',
  token: '123'
  // userData: {
  //   calloriesPerDay: 100,
  //   groupBlood: 100,
  //   height: 100,
  //   desiredWeight: 100,
  //   currentWeight: 100,
  //   age: 44
  // }
};

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FETCH_SUCCESS:
      return { ...state, user: { ...state.user, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood } };
    case actionTypes.USER_DATA:
      return { ...payload };

    default:
      return state;
  }
};
export default sessionReducer;
