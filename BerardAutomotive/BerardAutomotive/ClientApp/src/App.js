import React, { useEffect, useState, Button } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { MainPage } from './pages/main-page';
import { OtherPage } from './pages/other-page';
import { AboutUsPage } from './pages/about-us';
import 'semantic-ui-css/semantic.min.css'

function App() {

  useEffect(() => {
    Axios.get('/api/services').then((response) => {
      console.log(response);
    })
  }, [])

  return (

    <div className="App">
      <Router>
        <Route exact path={"/other"} component={OtherPage} />
        <Route exact path={"/about"} component={AboutUsPage} />
        <Route exact path={"/home"} component={MainPage} />
      </Router>
    </div>

  );
}

export default App;