import React from "react";
import Layout from "../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container">
        <h1 style={{ marginTop: "2rem" }}>About the Company</h1>
        <hr/>
        <div className="container">
          <p className="about">
            Multifacet Technologies is a business and Information Technology
            service company. It focuses on various aspects of technologies,
            consulting, training and outsourcing that cut across all strata of
            information technology. We also offer advisory services on any form
            of e-services and Networking.
          </p>
        </div>
      </div>
    </Layout>
  );
}
