import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPage";
import PageNotFound from '../../../PageNotFound/PageNotFound'
import SingleComic from "../singleComic/SingleComic";

const App = () => {
  return (
    <div className="app">
      <AppHeader />

     <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/comics" element={<ComicsPage />}/>
        <Route path="/comics/:comicId" element={<SingleComic />}/>
        <Route path="*" element={<PageNotFound/>}/>
      
     </Routes>
    </div>
  );
};

export default App;
