// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './styles.scss'
import App from './App';

<<<<<<< HEAD
ReactDOM.render(<AppContainer>
    <App/>
  </AppContainer>, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
=======
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
>>>>>>> origin
}