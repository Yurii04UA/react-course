import React from "react";
import "./TrainingPage.css";

// import Props from "../TrainingPage/Props/Props";
// import Counter from "../TrainingPage/Counter/Counter";

import {  Route, Routes, NavLink } from "react-router-dom";

const TrainingPage = () => {
  return (
    <div className="container tr-page">
      <nav className="navBar">
        <NavLink to="/props" className="link">Props</NavLink>
        <NavLink to="/counter" className="link" >Counter</NavLink>
        <NavLink to="/events" className="link">Ref</NavLink>
        <NavLink to="/bootstrap-test" className="link" >Bootstrap test</NavLink>
        {/* <Routes>
          <Route path="/props" element={<Props />} ></Route>
          <Route path="/counter" element={<Counter />} ></Route>
          </Routes> */}
      </nav>
     
    </div>
  )
};

export default TrainingPage;

