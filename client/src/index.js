import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './containers/App';
import './index.scss';

import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
   <StrictMode>
      <Provider store={store}>
         <Router>
            <App />
         </Router>
      </Provider>
   </StrictMode>,
  document.getElementById('root')
);
