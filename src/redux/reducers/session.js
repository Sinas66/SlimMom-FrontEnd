import { ADD_FETCH_SUCCESS } from '../actions/constants';
const INITIAL_STATE = {
  user: {
    groupBlood: 0,
    nickname: '',
    dailyRate: 0
  },
  token: ''
};

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_FETCH_SUCCESS:
      return { ...state, user: { ...state.user, dailyRate: payload.dailyRate, groupBlood: payload.groupBlood } };
    default:
      return state;
  }
};
export default sessionReducer;
