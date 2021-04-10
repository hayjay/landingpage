import React from "react";
import Ecommerce from "../../components/Ecommerce";
import Layout from "../../components/Layout";
import Services from "../../components/Services";



export default function ServicesPage() {
  return (
    <Layout>
      <article className="container">
        <header>
          <h1 style={{marginTop: '2rem'}}> Our Servies</h1>
          <hr/>
        </header>
        <Services />
        <div style={{marginTop: '2rem'}}>
          <h2>E-Commerce</h2>
          <Ecommerce />
        </div>
      </article>
    </Layout>
  );
}
