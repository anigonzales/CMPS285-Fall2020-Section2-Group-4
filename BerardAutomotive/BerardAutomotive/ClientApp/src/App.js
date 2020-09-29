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
import OtherPage from './pages/other-page';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter >
      <Header />
      <TabsNav />
      <Footer />
      <Switch>
        <Route exact path = {"/services"} component = {ServicesPage}/>
        <Route exact path = {"/"} component = {MainPage}/>
        <Route exact path = {"/other"} component = {OtherPage} />
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;