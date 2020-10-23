import React, { useEffect, useState, Button } from 'react';
import 'react-tabs/style/react-tabs.css';
import './Header.css'
import './Footer.css'
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { ServicesPage } from './pages/services-page';
import { OtherPage } from './pages/other-page';
import { AboutUsPage } from './pages/about-us';
import { MainPage } from './pages/main-page';
import { LoginPage } from './pages/login-page';
import 'semantic-ui-css/semantic.min.css';
import TabsNav from './components/TabsNavigation/tabs-nav';
import 'react-tabs/style/react-tabs.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    Axios.get('/api/services').then((response) => {
      console.log(response);
    })
  }, [])

  return (

    <div className="App">
      <Router>
        <Header />
        <Footer />
        <TabsNav />
        <Route exact path={"/home"} component={MainPage} />
        <Route exact path={"/other"} component={OtherPage} />
        <Route exact path={"/about"} component={AboutUsPage} />
        <Route exact path={"/services"} component={ServicesPage} />
        <Route exact path={"/login"} component={LoginPage} />
      </Router>
    </div>

  );
}

export default App;