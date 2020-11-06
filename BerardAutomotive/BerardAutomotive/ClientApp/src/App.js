import React, { useEffect, useState, Button } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ServicesPage from './pages/services-page';
import MainPage from './pages/main-page';
import ContactPage from './pages/contact-page';
import 'semantic-ui-css/semantic.min.css';
import AboutPage from './pages/about-page';
// import Axios from 'axios';
import { MainRoutes } from './main-routes.js'
import LoginPage from './login-page-things/login-page'


function App() {

    <div className="App">
      <BrowserRouter >
        <Header />
        <TabsNav />
        <Footer />
        <Switch>
          <Route exact path={"/services"} component={ServicesPage} />
          <Route exact path={"/home"} component={MainPage} />
          <Route exact path={"/contact"} component={ContactPage} />
          <Route exact path={"/about"} component = {AboutPage} />
          <Route exact path={"/"} component = {MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
