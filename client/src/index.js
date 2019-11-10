import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>  , document.getElementById('root'));

serviceWorker.unregister();