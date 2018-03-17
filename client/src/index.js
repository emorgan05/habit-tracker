import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import LoginPage from './containers/LoginPage';
import HabitsList from './containers/HabitsList';
import HabitDetails from './components/HabitDetails';
import AddHabit from './containers/AddHabit';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/habits" component={HabitsList} />
        <Route path="/habits/:id" component={HabitDetails} />
        <Route path="/habits/new" component={AddHabit} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
