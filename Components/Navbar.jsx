import React, { useState } from 'react';
import logo from "../Images/logo.png"
import "../CSS/Navbar.css"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#"><b>G-HOC</b></a>
        <button 
          className="navbar-toggler bg-light" 
          type="button" 
          onClick={toggleNavbar}  // Toggle function added here
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Store</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    

    

  );
};

export default Navbar;
