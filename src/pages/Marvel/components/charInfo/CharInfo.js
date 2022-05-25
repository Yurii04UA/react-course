import { Component, useEffect, useState } from "react";

import "./charInfo.scss";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import Skeleton from "../skeleton/Skeleton";

const  CharInfo = (props) => {
 
  
   const [char,setChar] =useState(null)
   const [loading,setLoading] =useState(false)
   const [error,setError] =useState(false)

  const marvelServise = useMarvelService();

  const { charId } = props;
  useEffect(() => {
    updateChar()
  },[])

  useEffect(()=>{
    updateChar()

  },[charId])
 
 const updateChar = () => {
    
    if (!charId) {
      return;
    }

    onCharLoading();
    marvelServise
      .getCharacter(charId)
      .then(onCharLoaded)
      .catch(onError);

  };

  const onCharLoaded = (char) => {
    setChar( char)
    setLoading(load => false)
  };

  const onError = () => {
    setLoading( load => false)
    setError(err => true)
  };

 const onCharLoading = () => {
    setLoading(load => true)
  };

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMassage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View2 char={char} /> : null;

    return (
      <div className="char__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
}

const View2 = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let classImg = {objectFit: 'cover'}
            if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                classImg = {objectFit: 'contain'}
            }
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={classImg}/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null: 'Comics not found'}
        {comics.map((item,i) => {
          if(i > 5) return
          return(
            <li className="char__comics-item" key={i}>
              {item.name}
            </li>
          )

        })}
      </ul>
    </>
  );
};

export default CharInfo;
