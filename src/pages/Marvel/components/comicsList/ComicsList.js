import "./comicsList.scss";
import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ErrorMassage from "../ErrorMassage/ErrorMassage";

const ComicsList = () => {
  const { getAllComics, clearError, loading, error } = useMarvelService();
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(200);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);
  useEffect(() => {
    onRender(offset, true);
  }, []);

  const onRender = (offset, initial) => {
    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllComics(offset).then(e => onComicsLoaded(e));
  };

  const onComicsLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < 8) {
      ended = true;
    }
    setComics((comics) => [...comics, ...newComics]);
    setnewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(ended);
  };

  const content = comics.map((item, i) => {
    return (
      <li className="comics__item" key={i}>
        <Link to={`/marvel-page/comics/${item.id}`}>
          <img
            src={item.thumbnail}
            alt="ultimate war"
            className="comics__item-img"
          />
          <div className="comics__item-name">{item.title}</div>
          <div className="comics__item-price">{item.prices}</div>
        </Link>
      </li>
    );
  });

  const Spiner = loading && !newItemLoading ? <Spinner /> : null;
  const Error = error ? <ErrorMassage /> : null;
  return (
    <div className="comics__list">
      {Error}
      {Spiner}
      <ul className="comics__grid p-0">{content}</ul>
      <button
        className="button button__main button__long"
        onClick={() => onRender(offset)}
        disabled={newItemLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
