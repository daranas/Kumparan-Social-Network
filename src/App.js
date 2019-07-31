import React from 'react';
// components
import Header from './components/Header/Header';
// static assets
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
    </div>
  );
}

export default App;
