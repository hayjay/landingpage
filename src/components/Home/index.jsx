import React from "react";
import Courses from "../Courses";
import Layout from "../Layout";
import Banner from "./Banner";

import './HomeStyle/style.css'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <article className="container">
        <header style={{marginTop: '2rem'}}>
          <h1 id="courses">Courses</h1>
          <hr/>
        </header>
<<<<<<< HEAD
        <Courses /> 
       <Directors />
=======
        <Courses />
>>>>>>> 423c054b338c9fce7783890141e6f40e31ec074f
      </article>
    </Layout>
  );
}
