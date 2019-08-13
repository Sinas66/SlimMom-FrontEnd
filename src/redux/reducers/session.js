import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: 'name',
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
      return {
        ...state,
        userData: { ...state.userData, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood }
      };
    case actionTypes.ADD_ALL_DATA:
      return { ...state, userData: { ...payload } };
    case actionTypes.USER_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default sessionReducer;
