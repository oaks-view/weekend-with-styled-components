import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import store from './store';
import App from './containers/App';

import './styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider placement="bottom-right">
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root'),
);
