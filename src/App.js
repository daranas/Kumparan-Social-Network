import React from 'react';
// components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// static assets
import logo from './assets/images/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main />
    </div>
  );
}

export default App;
