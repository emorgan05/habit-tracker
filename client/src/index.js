import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import LoginContainer from './containers/LoginContainer';
import HabitsContainer from './containers/HabitsContainer';
import Navigation from './containers/Navigation';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={LoginContainer} />
        <Route path="/habits" component={HabitsContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
