import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reduxStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = reduxStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
