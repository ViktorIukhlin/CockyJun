import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore';
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
