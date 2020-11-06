import React, { useEffect, useState, Button } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-tabs/style/react-tabs.css';
import { MainRoutes } from './main-routes.js'
import LoginPage from './login-page-things/login-page'


function App() {

  return (
    <>
      <div>
        <Router >
          <Route path="/home">
            <MainRoutes />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          {/*<Route>
            <Redirect to="/home/main" />
          </Route>*/}
        </Router>
      </div>
    </>
  );
}

export default App;