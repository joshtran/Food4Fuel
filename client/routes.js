import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import PackagePage from './components/package/PackagePage';
import GroceriesPage from './components/groceries/GroceriesPage';
import SheltersPage from './components/shelters/SheltersPage';
import BoxesPage from './components/boxes/BoxesPage';
import DashboardPage from './components/dashboard/DashboardPage';

import requireAuth from './utils/requireAuth';

export const routeTo = (route) => {
  return browserHistory.push(route);
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="package" component={PackagePage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
    <Route path="groceries" component={GroceriesPage} />
    <Route path="shelters" component={SheltersPage} />
    <Route path="boxes" component={BoxesPage} />
    <Route path="dashboard" component={DashboardPage} />
  </Route>
)
