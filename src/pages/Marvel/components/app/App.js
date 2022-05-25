import { React, useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBountary from "../ErrorBountary/ErrorBountary";

import decoration from "../../resources/img/vision.png";

const App = () => {
  // state = {
  //   selectedChar: null,
  // };
  const [selectedChar, setSelectedChar] = useState(null);
  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBountary>
          <RandomChar />
        </ErrorBountary>
        {/* <div className="char__content">
          <ErrorBountary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBountary>
          <ErrorBountary>
            <CharInfo charId={selectedChar} />
          </ErrorBountary>
        </div> */}
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
