import "./charList.scss";
import { Component, useEffect, useState, useRef } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMassage/ErrorMassage";

const CharList = (props) => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marverlServese = useMarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marverlServese.getAllCharacters(offset).then(onCharLoaded).catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharLoaded = (newChar) => {
    let ended = false;
    if (newChar.length < 9) {
      ended = true;
    }

    setChar((char) => [...char, ...newChar]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  let itemRef = useRef([]);

  const focusOnItem = (id) => {
    itemRef.current.forEach((elem) =>
      elem.classList.remove("char__item_selected")
    );
    itemRef.current[id].classList.add("char__item_selected");
    itemRef.current[id].focus();
  };

  const content = char.map((item, i) => {
    return (
      <li
        className="char__item"
        key={item.id}
        ref={(el) => (itemRef.current[i] = el)}
        tabIndex={0}
        onClick={() => {
          props.onCharSelected(item.id);
          focusOnItem(i);
        }}
      >
        <img src={item.thumbnail} alt={item.nane} />
        <div className="char__name">{item.name}</div>
      </li>
    );
  });
  const spinner = loading ? <Spinner /> : null;
  const errors = error ? <ErrorMessage /> : null;

  return (
    <div className="char__list">
      {spinner}
      {errors}
      <ul className="char__grid">{content}</ul>
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        onClick={() => onRequest(offset)}
        style={{ display: charEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
