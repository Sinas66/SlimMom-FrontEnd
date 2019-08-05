const INITIAL_STATE = {
  user: {
    groupBlood: 1,
    nickname: 'name',
    dailyRate: 3000
  },
  token: '123'
};;

export const sessionReducer = (state = INITIAL_STATE, { type, payload }) => {
  return state;
};

export default sessionReducer;

