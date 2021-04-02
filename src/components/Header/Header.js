import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Headers.css'
import { faMobile } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand mobile" href="#"><FontAwesomeIcon icon={faMobile} /> <span className='ml-4'>Yours Mobile Shop</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav menu">
              <li >
                <Link to="/home">Home</Link>
              </li>
              <li >
                <Link to="/order">Orders</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li >
                <Link to="/">Deals</Link>
              </li>
              <li >
              <Link to="/logIn"><button className="btn btn-info">Log In</button></Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
    </div>
  );
};

export default Header;