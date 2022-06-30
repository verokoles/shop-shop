<<<<<<< HEAD
import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
=======
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

>>>>>>> 694d9dbae9c3f94c5ad75b8f012b273dff3e3643
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
<<<<<<< HEAD
            <Link to="/orderHistory">Order History</Link>
=======
            <Link to="/orderHistory">
              Order History
            </Link>
>>>>>>> 694d9dbae9c3f94c5ad75b8f012b273dff3e3643
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
<<<<<<< HEAD
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
=======
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
>>>>>>> 694d9dbae9c3f94c5ad75b8f012b273dff3e3643
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
<<<<<<< HEAD
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
=======
          <span role="img" aria-label="shopping bag">🛍️</span>
>>>>>>> 694d9dbae9c3f94c5ad75b8f012b273dff3e3643
          -Shop-Shop
        </Link>
      </h1>

<<<<<<< HEAD
      <nav>{showNavigation()}</nav>
=======
      <nav>
        {showNavigation()}
      </nav>
>>>>>>> 694d9dbae9c3f94c5ad75b8f012b273dff3e3643
    </header>
  );
}

export default Nav;
