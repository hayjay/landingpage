import React from "react";
import Courses from "../Courses";
import Directors from "../Directors";
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
        <Courses />
      </article>
    </Layout>
  );
}
