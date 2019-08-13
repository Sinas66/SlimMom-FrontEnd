import { requestRegister, requestLogin, requestUserData } from '../../utils/requests';
import { actionTypes } from './constants';
import { createAction } from '../../utils/utils';

const userLogin = createAction(actionTypes.USER_LOGIN);
const userRegister = createAction(actionTypes.USER_REGISTER);
const userData = createAction(actionTypes.USER_DATA);

export const sendRegisterData = data => dispatch =>
  requestRegister(data)
    .then(({ data }) => {
      dispatch(userRegister(data));
      return data.user;
    })
    .catch(({ error }) => console.log(error));

export const sendLoginData = data => dispatch =>
  requestLogin(data)
    .then(({ data }) => {
      dispatch(userLogin(data));
      return data.user;
    })
    .catch(({ error }) => console.log(error));

export const getUserData = token => dispatch =>
  requestUserData(token)
    .then(({ data }) => {
      dispatch(userData(data.user));
    })
    .catch(({ error }) => error);
