import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
