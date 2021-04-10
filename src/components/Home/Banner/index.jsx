import React from "react";

import BannerImage from "../../../static/images/hero_1.jpg";
import './style.css'

export default function Banner() {
  return (
    <>
      <div
        
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
       
        <div class="carousel-inner" >
          <div class="carousel-item active" >
            <img src={BannerImage} class="d-block w-100"  alt="..." />
            <div class="carousel-caption  d-block">
              <h6>WELCOME TO <span style={{fontWeight: 'bolder'}}>MULTIFACET TECHNOLOGIES </span> </h6>
              <h5 >FOR ALL CISCO PROFESSIONAL TRAINING AND EXAMINATIONS</h5>
              <h6>UK BASED CERTIFICATION</h6>
              <p>Click here to Register </p>
              <a class="btn btn-primary" href="/register" role="button">Register</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src={BannerImage} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h6>WELCOME TO <span style={{fontWeight: 'bolder'}}>MULTIFACET TECHNOLOGIES </span> </h6>
              <h5 >FOR ALL CISCO PROFESSIONAL TRAINING AND EXAMINATIONS</h5>
              <h6>UK BASED CERTIFICATION</h6>
              <p>Click here to Register </p>
              <a class="btn btn-primary" href="/register" role="button">Register</a>

            </div>
          </div>
          {/* <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>
      
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}
