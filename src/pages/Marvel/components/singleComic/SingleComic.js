import { useParams, Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import { useState, useEffect } from "react";

import "./singleComic.scss";


const SingleComic = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState([]);
  const { loading, error, getComics, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    if (!comicId) {
      return;
    }

    getComics(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMassage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <Wiev comic={comic} /> : null;



  return <div className="single-comic">
      {errorMessage}
      {spinner}
      {content}
  </div>;
};

const Wiev = ({comic}) => {
    const {title,description,pageCount,language, price,thumbnail} = comic
  return (
    <>
      <img src={thumbnail} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info text-start">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to='/marvel-page/comics' className="single-comic__back">
        Back to all
      </Link>
    </>
  );
};

export default SingleComic;
