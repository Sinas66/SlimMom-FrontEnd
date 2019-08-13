import { actionTypes } from '../actions/constants';

const INITIAL_STATE = {
  nickname: 'name',
  token: '123',
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
    case actionTypes.USER_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default sessionReducer;
