import React from "react";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

import "./style/style.scss";

const marvelService = new MarvelService();
// marvelService.getAllCharacters().then(res => console.log(res.data.results))
marvelService.getAllCharacters().then((res) => res.data.results.forEach(item => console.log(item.name)))

const AppMarvelPage = () => {
  return (
    <div className="container">
      <App />
      {/* <MarvelService /> */}
    </div>
  );
};

export default AppMarvelPage;
