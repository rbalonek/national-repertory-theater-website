import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.css"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-holder">
        <Header />
        <main>{props.children}</main>
        <div className="footer__container">
        <Footer />
        </div>
      </div>
    </div>
  );
}