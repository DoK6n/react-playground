import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import ReduxThunk from 'redux-thunk';

import App from './App';
import './index.css';
import rootReducer from './lib/store';
import logger from 'redux-logger';
// import logger from './lib/middleware/logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
); // 스토어를 만듭니다.

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
);
