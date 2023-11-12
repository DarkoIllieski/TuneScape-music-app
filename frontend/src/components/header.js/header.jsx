import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">TScape</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
