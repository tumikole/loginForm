import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SignUp from "./SignUp"
import Dashboard from "./Dashboard"
import Error from "./Error"


function Main() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/login" exact element={<Home />} />
          <Route path="/sigh-up" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/*" exact element={<Error />} />


          
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
