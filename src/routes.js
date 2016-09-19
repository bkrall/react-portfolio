import React from 'react';
import { Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Microinteractions } from 'containers/Microinteractions';


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default (
  <Route path="/" component={App} history={appHistory}>
    <IndexRoute component={Home} history={appHistory} />
    <Route path="microinteractions" history={appHistory} component={Microinteractions} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
