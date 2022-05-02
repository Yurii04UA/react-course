import React from 'react'


// const WhoImI = (props)=>{ // можно деструктуризировать props 
// ({props.name})

const WhoImI = ({name,surmane,link})=>{  
  return (
    <div>
      <h1>My name is {name}, surname -{surmane} </h1>
      <a href={link}>My profile</a>
    </div>
  )
}
/// Как свойство можно передавать:
// - обьект  // name={{firsName: 'Yurii3'}}  елемент выглядит так My name is {name.firsName}
// - функцию // name={()=> {return 'Yurii func'}}  елемент выглядит так My name is {name()}
const Props = () => {
  return (
    <div className='container'>

      <WhoImI name={'Yuroo'} surmane="Praka" link="https://translate.google.com/?hl=ru"/>
      <WhoImI name="Ole" surmane="Pavaka" link="https://translate.google.com/?hl=ru"/>
    </div>
  )
}

export default Props