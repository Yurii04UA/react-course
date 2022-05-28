import { React, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
// import ComicsPage from "../pages/ComicsPage";
// import MainPage from "../pages/MainPage";
// import SingleComic from "../singleComic/SingleComic";
import Spinner from "../Spinner/Spinner";
import PageNotFound from "../../../PageNotFound/PageNotFound";

/// Lazy page loading
/// Dinamic imports must be under static imports
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComic = lazy(() => import('../singleComic/SingleComic'))

const App = () => {
  return (
    <div className="app">
      <AppHeader />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:comicId" element={<SingleComic />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
