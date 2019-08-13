import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: '',
  token: '',
  userData: {
    groupBlood: 0,
    height: 0,
    desiredWeight: 0,
    currentWeight: 0,
    age: 0
  }
};

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FETCH_SUCCESS:
      return { ...state, user: { ...state.user, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood } };
    case actionTypes.USER_REGISTER:
    case actionTypes.USER_DATA:
    case actionTypes.USER_LOGIN:
      return { ...payload };

    default:
      return state;
  }
};
export default sessionReducer;
