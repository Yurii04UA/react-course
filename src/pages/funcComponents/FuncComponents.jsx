import React from 'react'


import {NavLink } from "react-router-dom";

const FuncComponents = () => {
  return (
    <div className='container tr-page'>
     <nav className="navBar">
        <NavLink to="/func-components/use-state" className="link">useState</NavLink>
        <NavLink to="/func-components/use-effect" className="link" >useEffect</NavLink>
        <NavLink to="/func-components/custom-hooks" className="link" >Custom hooks</NavLink>
        <NavLink to="/func-components/useReducer" className="link">useReducer</NavLink>
        <NavLink to="/func-components/HOC" className="link" >Higher Order Component(HOC)</NavLink>
      
      </nav>

    </div>
  )
}

export default FuncComponents