import React, { useEffect, useState, Button } from 'react';
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {MainPage } from './pages/main-page';
import { OtherPage } from './pages/other-page';

const App = () => {

  useEffect(() => {
      Axios.get('/api/services').then((response) => {
        console.log(response);
      })
  }, [])

  return (
    <>
    <Router>
      <Switch>
        <Route path="/home">
          <MainPage/>
        </Route>
        <Route path="/other">
          <OtherPage/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
