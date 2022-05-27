import React from 'react'
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBountary from "../ErrorBountary/ErrorBountary";

import { useState } from 'react';
import decoration from "../../resources/img/vision.png";

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
            <CharInfo charId={selectedChar} />
          </ErrorBountary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage