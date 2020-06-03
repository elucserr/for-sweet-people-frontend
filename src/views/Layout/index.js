import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Nav />

        <Footer />
      </div>
    );
  }
}

export default Layout;
