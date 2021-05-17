import React, { lazy } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Route from './components/route';

//layout
const DefaultLayout = lazy(() =>import('./components/layout/defaultLayout'));

// pages
const LoginPage = lazy(() =>import('./pages/login'));
const ManageCustomer = lazy(() =>import('./pages/manageCustomer'));
const ManageProducts = lazy(() =>import('./pages/manageProducts'));
const ManageFinance = lazy(() =>import('./pages/manageFinance'));

const routes = (
  <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={ManageProducts}
          layout={DefaultLayout}
        />

        <Route
          path="/login"
          exact
          component={LoginPage}
          // layout={DefaultLayout}
        />

        <Route
          path="/manage-products"
          exact
          component={ManageProducts}
          layout={DefaultLayout}
        />

        <Route
          path="/manage-customer"
          exact
          component={ManageCustomer}
          layout={DefaultLayout}
        />

        <Route
          path="/manage-finance"
          exact
          component={ManageFinance}
          layout={DefaultLayout}
        />
      </Switch>
  </Router>
)


export default routes;