import { useParams, Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import { useState, useEffect } from "react";

import "./singleComic.scss";
import xMen from "../../resources/img/x-men.png";

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

  return <div className="single-comic">
      {<Wiev />}
  </div>;
};

const Wiev = (comic) => {
  return (
    <>
      <img src={xMen} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info text-start">
        <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
        <p className="single-comic__descr">
          Re-live the legendary first journey into the dystopian future of 2013
          - where Sentinels stalk the Earth, and the X-Men are humanity's only
          hope...until they die! Also featuring the first appearance of Alpha
          Flight, the return of the Wendigo, the history of the X-Men from
          Cyclops himself...and a demon for Christmas!?
        </p>
        <p className="single-comic__descr">144 pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">9.99$</div>
      </div>
      <a href="#" className="single-comic__back">
        Back to all
      </a>
    </>
  );
};

export default SingleComic;
