import "./App.css";
import * as React from "react";
import {  Route, Routes} from "react-router-dom";
import AppHeader from "./pages/appHeader/AppHeader";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/test" element={<h2>HEEEE</h2>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
