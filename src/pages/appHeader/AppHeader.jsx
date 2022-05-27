import React from 'react'
import { NavLink } from "react-router-dom";
import "./AppHeader.css"

const AppHeader = () => {
  return (
    <div>
       <nav className="navBar">
        <NavLink to="/" className="link">Home</NavLink>
        
        <NavLink to="/func-components" className="link">Functional components</NavLink>
        
        <NavLink to="/training-page" className="link">Training page</NavLink>
        <NavLink to="/marvel-page/" className="link">Marvel Page</NavLink>
        <NavLink to="/workers-page" className="link">Workers Page</NavLink>
        <NavLink to="/react-course" className="link">React course</NavLink>
        <NavLink to="/todo-light" className="link">ToDo light</NavLink>
        <NavLink to="/test5" className="link">test</NavLink>
        
      </nav>
    </div>
  )
}

export default AppHeader