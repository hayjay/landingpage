import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layoutstyles/styles.css";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
