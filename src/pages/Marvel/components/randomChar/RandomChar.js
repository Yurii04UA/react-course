import { Component, useEffect, useState, useRef } from "react";
import "./randomChar.scss";
import MarvelService from "../../services/MarvelService";
import mjolnir from "../../resources/img/mjolnir.png";
import ErrorMessage from "../ErrorMassage/ErrorMassage";

import Spinner from "../Spinner/Spinner";

const RandomChar = () => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, []);

  const onCharLoaded = (char) => {
    setChar(item => char);
    setLoading(item => false);
  };
  const onCharLoading = () => {
    setLoading( item => true);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    onCharLoading();
    marvelService
      // .getAllCharacters().then(res => console.log(res))
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  };

  const onError = () => {
    setLoading((load) => false);
    setError((err) => true);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <Wiew char={char} /> : null;

  return (
    <div className="randomchar">
      {errorMessage}
      {spinner}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main" onClick={updateChar}>
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const Wiew = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  let classImg = { width: "180px", height: "180px", objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    classImg = { width: "180px", height: "180px", objectFit: "contain" };
  }
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" style={classImg} />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
