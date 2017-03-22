import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PresentMap from './components/PresentMap';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import * as actions from './actions';
import { socket } from './network/socket';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const store = configureStore({ markers: []});

console.log(socket);
socket.on('state', state => {
  store.dispatch(actions.setState(state))
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PresentMap} />
        <Route path="/" component={PresentMap} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
