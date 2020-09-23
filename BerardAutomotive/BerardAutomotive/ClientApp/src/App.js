import React from 'react';
import './App.css';
import Header from './components/Header'
import './Header.css'
import Footer from './components/Footer'
import './Footer.css'
import tabsNav from './components/tabs-nav';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className="App">
      <Header />
      <tabsNav />
      <Footer />
    </div>
  );
}

export default App;