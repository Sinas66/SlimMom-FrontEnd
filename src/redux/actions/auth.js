import { requestRegister, requestLogin } from '../../utils/requests';
import { actionTypes } from './constants';
import { createAction } from '../../utils/utils';

const userLogin = createAction(actionTypes.USER_LOGIN);
const userRegister = createAction(actionTypes.USER_REGISTER);

export const sendRegisterData = data => dispatch =>
  requestRegister(data)
    .then(({ data }) => {
      dispatch(userRegister(data));
      return true;
    })
    .catch(({ error }) => console.log(error));

export const sendLoginData = data => dispatch =>
  requestLogin(data)
    .then(({ data }) => {
      dispatch(userLogin(data));
      return true;
    })
    .catch(({ error }) => console.log(error));
