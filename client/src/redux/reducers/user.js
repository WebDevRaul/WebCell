import { ACCOUNT } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  error: {}
}

const user = (state=INITIAL_STATE, action) => {
  const { payload } = action;
  switch(action.type) {
    default:
      return state;
  }
} 

export default user;