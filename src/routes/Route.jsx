import React from "react";
import { Route as Router, Switch, BrowserRouter } from "react-router-dom";

// import Header from "../layout/Header";
// import Footer from "../layout/Footer";

const Route = ({ location, children, ...props }) => {
  const path = location.pathname;

  return path === "/checkout" ? (
    <Router {...props} />
  ) : (
    <>
      {/* <Header /> */}
      <Router {...props}>{children}</Router>
      {/* <Footer /> */}
    </>
  );
};

export default Route;
