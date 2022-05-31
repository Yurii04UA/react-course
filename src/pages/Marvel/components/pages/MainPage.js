import React from 'react'
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBountary from "../ErrorBountary/ErrorBountary";

import { useState } from 'react';
import decoration from "../../resources/img/vision.png";
import SearchForm from '../searchForm/SearchForm';

const MainPage = () => {
   const [selectedChar, setSelectedChar] = useState(null);
   const onCharSelected = (id) => {
     setSelectedChar(id);
   };
  return (
    <>
       <ErrorBountary>
          <RandomChar />
        </ErrorBountary>
        <div className="char__content">
          <ErrorBountary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBountary>
          <ErrorBountary>
            <div>
              <CharInfo charId={selectedChar} />
              <SearchForm/>
            </div>
          </ErrorBountary>
         
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage