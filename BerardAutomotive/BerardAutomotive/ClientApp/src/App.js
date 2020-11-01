import React from 'react';
import './App.css';
import Header from './components/Header'
import './Header.css'
import Footer from './components/Footer'
import './Footer.css'
import TabsNav from './components/TabsNavigation/tabs-nav';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ServicesPage from './pages/services-page';
import MainPage from './pages/main-page';
import ContactPage from './pages/contact-page';
import 'semantic-ui-css/semantic.min.css';
import AboutPage from './pages/about-page';
// import Axios from 'axios';

function App() {
  return (

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