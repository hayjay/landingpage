import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarStyle/style.css";
import logo from "../../static/images/logo.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-blue">
        <div className="container">
          <Link className="navbar-brand nav-link" to="/">
            <span>
              <img
                style={{ width: "40px", height: "40px" }}
                src={logo}
                className="nav-brand-img"
                alt=""
              />
              MULTIFACET
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" variant="tabs">
              <li className="nav-item active">
                <NavLink className="nav-link home" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  OUR SERVICES & COURSES
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/our-team">
                  OUR TEAM
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-success nav-register">
                  REGISTER NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
