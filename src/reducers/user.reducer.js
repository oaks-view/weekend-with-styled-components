import { UPDATE_USER, DEFAULT_USER } from '../constants/user.constants';

const userReducer = (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default userReducer;
