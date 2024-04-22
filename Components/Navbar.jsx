import React, { useState } from 'react';
import logo from "../Images/logo.png"
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/"><b>G-HOC</b></Link>
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
              <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to="/store">Store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>





  );
};

export default Navbar;
