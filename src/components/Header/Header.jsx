import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = props => {
  return (
    <header className="kumparan-header">
      <div className="logo">
        <Link to="/">
          <img src={props.logo} alt="Kumparan Social Network"/>
        </Link>
      </div>
    </header>
  );
}

export default Header;