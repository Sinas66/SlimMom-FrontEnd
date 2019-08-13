import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: '',
  token: '',
  userData: {
    groupBlood: '',
    height: '',
    desiredWeight: '',
    currentWeight: '',
    age: ''
  }
};

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FETCH_SUCCESS:
      return { ...state, user: { ...state.user, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood } };
    case actionTypes.USER_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default sessionReducer;
