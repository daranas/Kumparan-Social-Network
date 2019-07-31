import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="kumparan-header">
      <div className="logo">
        <img src={props.logo} alt="Kumparan Social Network"/>
      </div>
    </header>
  );
}

export default Header;