import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarStyle/style.css";
import logo from "../../static/images/logo.jpg";


export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-blue" >
        <div class="container">
          <Link className="navbar-brand" to="/">
            <img style={{width: '40px', height: '40px'}} src={logo} class="nav-brand-img" alt=""/>
            <NavLink class="nav-link multi" to="/">
                  MULTIFACET
                </NavLink>
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
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" variant="tabs" defaultActiveKey="/">
              <li class="nav-item active">
                <NavLink className="nav-link home" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/services">
                  OUR SERVICES & COURSES
                </NavLink>
              </li>
              
              <li class="nav-item">
                <NavLink class="nav-link" to="/our-team">
                  OUR TEAM
                </NavLink>
              </li>
              <li class="nav-item">
                <Link to="/register" class="btn btn-success nav-register">REGISTER NOW</Link>

              </li>   
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
