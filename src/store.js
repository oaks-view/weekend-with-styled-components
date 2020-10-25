import { createStore } from 'redux';

import globalReducer from './global-reducer';

const store = createStore(globalReducer);

export default store;
