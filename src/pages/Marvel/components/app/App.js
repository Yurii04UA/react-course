import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPage";

const App = () => {
  return (
    <div className="app">
      <AppHeader />

     <Routes>
        <Route path="/*" element={<MainPage />}/>
        <Route path="/comics" element={<ComicsPage />}/>
        
      
     </Routes>
    </div>
  );
};

export default App;
