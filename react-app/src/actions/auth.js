import { USER_LOGGED_IN } from '../types';
import api from '../api';


export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})

export const signin = credentials => (dispatch) =>
  api.user.signin(credentials).then(user => dispatch(userLoggedIn(user)));