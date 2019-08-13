const INITIAL_STATE = {
  nickname: 'name',
  token: '123',
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
  return state;
};

export default sessionReducer;
