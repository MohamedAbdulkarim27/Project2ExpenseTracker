import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Expense Tracker
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-link '>
              <Link to='/register' className='nav-link'>
                Register
              </Link>
            </li>
            <li className='nav-link '>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
            <li className='nav-item dropdown nav-link'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link to='/homepage' className='dropdown-item'>
                    HomePage
                  </Link>
                </li>
                <li>
                  <Link to='/profile' className='dropdown-item'>
                    Profile Page
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='dropdown-item'>
                    About
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-link'>
              <Link to='/' className='nav-link'>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;