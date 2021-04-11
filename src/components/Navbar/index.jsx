import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../static/images/logo.jpg";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img style={{width: '50px', height: '40px'}} src={logo} alt=""/>
          </Link>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
<<<<<<< HEAD
                  About the Company
=======
                  About Us
>>>>>>> 423c054b338c9fce7783890141e6f40e31ec074f
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/services">
<<<<<<< HEAD
                  Our Services
=======
                  Our Services & Courses
>>>>>>> 423c054b338c9fce7783890141e6f40e31ec074f
                </NavLink>
              </li>
              
              <li class="nav-item">
<<<<<<< HEAD
                <NavLink class="nav-link" to="/#courses">
                  Courses
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="#contact">
                  Contact
                </NavLink>
              </li>
=======
                <NavLink class="nav-link" to="/our-team">
                  Our Team
                </NavLink>
              </li>
>>>>>>> 423c054b338c9fce7783890141e6f40e31ec074f
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
