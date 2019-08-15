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

export const sessionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FETCH_SUCCESS:
      return {
        ...state,
        userData: { ...state.userData, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood }
      };
    case actionTypes.ADD_ALL_DATA:
      return { ...state, userData: { ...payload } };
    case actionTypes.USER_REGISTER:
    case actionTypes.USER_DATA:
    case actionTypes.USER_LOGIN:
      return { ...payload };

    default:
      return state;
  }
};
export default sessionReducer;
