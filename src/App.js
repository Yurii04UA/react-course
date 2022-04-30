import "./App.css";
import * as React from "react";
import Test from "./test/Test";
import {  Route, Routes,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Heee</h2>
      <nav>
        <Link to="/" className="link" >Home</Link>
        <Link to="/test">test</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Test />}></Route>
        <Route path="/test" element={<h2>HEEEE</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
