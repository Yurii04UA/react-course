import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppBanner from '../appBanner/AppBanner'
import useMarvelService from '../../services/MarvelService'
import './SingleChar.scss'




const SingleChar = () => {
   const {charId}= useParams()
   const [data, setData] = useState([]);
   const { loading, error, getCharacter, clearError } = useMarvelService();

useEffect(()=>{
   updateChar()
},[charId])


const updateChar = () =>{
   clearError()
   getCharacter(charId).then(onCharLoaded)
}
const onCharLoaded = (char) => {
   setData(char)
}


  return (
     
    <div>
       <AppBanner/>
       
       <Wiev data={data}/>
       </div>
  )
}

const Wiev = ({data}) => {
  const {name,description,thumbnail} = data
   return(
      <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__char-img"/>
      <div className="single-comic__info">
          <h2 className="single-comic__name">{name}</h2>
          <p className="single-comic__descr">{description}</p>
      </div>
  </div>
   )
}
export default SingleChar