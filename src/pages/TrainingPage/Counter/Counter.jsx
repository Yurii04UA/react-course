import React from 'react'
import "./Counter.css";


const Counter = () => {
  return (
    <div >
      <div className="appCounter">
        <div className="counter">10</div>
        <div className="controls">
          <button>INC</button>
          <button>DEC</button>
          <button>RND</button>
          <button>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default Counter