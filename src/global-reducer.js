import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './reducers/user.reducer';

const globalReducer = combineReducers({
  user,
  route: routerReducer,
});

export default globalReducer;
