import React from 'react'

const Counter = ({counter,inc,dec,rnd}) => {
  return (
   <div className="jumbotron m-5">
      <h1 >{counter}</h1>
      <button onClick={inc} className="btn btn-primary"> DEC</button>
      <button onClick={dec} className="btn btn-primary"> INC</button>
      <button onClick={rnd} className="btn btn-primary"> RND</button>
 </div>
  )
}

export default Counter