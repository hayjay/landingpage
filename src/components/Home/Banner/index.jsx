import React from "react";

import BannerImage from "../../../static/images/hero_1.jpg";
import './style.css'
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div
        
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
         
        </div>
       
        <div className="carousel-inner" >
          <div className="carousel-item active" >
            <img src={BannerImage} className="d-block w-100"  alt="..." />
            <div className="carousel-caption  d-block">
              <h5>WELCOME TO <span style={{fontWeight: 'bolder'}}>MULTIFACET TECHNOLOGIES </span> </h5>
              <h5 >FOR ALL CISCO PROFESSIONAL TRAINING AND EXAMINATIONS</h5>
              <h6>UK BASED CERTIFICATION</h6>
              {/* <p>Click here to Register </p> */}
              {/* <a className="btn btn-success" href="/register" role="button">Register</a> */}
              <Link to="/register" className="btn btn-success">REGISTER</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={BannerImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>WELCOME TO <span style={{fontWeight: 'bolder'}}>MULTIFACET TECHNOLOGIES </span> </h5>
              <h5 >FOR ALL CISCO PROFESSIONAL TRAINING AND EXAMINATIONS</h5>
              <h6>UK BASED CERTIFICATION</h6>
              {/* <p>Click here to Register </p> */}
              <Link to="/register" className="btn btn-success">REGISTER</Link>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>
      
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}
