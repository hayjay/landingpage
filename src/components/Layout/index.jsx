import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layoutstyles/styles.css"

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children} 
      <footer >
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
