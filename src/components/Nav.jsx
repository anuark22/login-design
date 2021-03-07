import React from 'react';
import '../Nav.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link title="Home" to="/" className="logo">
            <img src={logo} alt="logo"/>
          </Link>
        </li>
        <li className="signup">
          <Link to="/signin">
            Sign in
          </Link>
        </li>
        <li className="signup">
          <Link to="/signup">
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
