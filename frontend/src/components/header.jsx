// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Your Music App</Link>
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
