import React from 'react'

const FetchLocation = (lat,lon) => {
 try{
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a14ed878c17ea88667c02de9b9be534`
  )
    .then((res) => res.json())
    return request
 }catch(e){
  console.log(e);
 }
 
}

export default FetchLocation