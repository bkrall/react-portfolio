import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
// import configureStore from './store/configureStore';
import routes from './routes';

// Only using store for hot-reloading, commenting out for production

// const history = useRouterHistory(createHashHistory)({ queryKey: false });
// const store = configureStore({}, history);

ReactDOM.render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
