import React from 'react'
import UseState from './useState/UseState'

import {NavLink } from "react-router-dom";

const FuncComponents = () => {
  return (
    <div className='container tr-page'>
     <nav className="navBar">
        <NavLink to="/use-state" className="link">useState</NavLink>
        <NavLink to="/use-effect" className="link" >useEffect</NavLink>
        <NavLink to="/something" className="link">something</NavLink>
        <NavLink to="/something" className="link" >something</NavLink>
      
      </nav>

    </div>
  )
}

export default FuncComponents