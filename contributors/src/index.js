import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
import initialState from './redux/reducers/initialState'


export const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>

      <App />

    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
