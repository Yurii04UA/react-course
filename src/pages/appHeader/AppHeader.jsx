import React from 'react'
import { NavLink } from "react-router-dom";
import "./AppHeader.css"

const AppHeader = () => {
  return (
    <div>
       <nav className="navBar">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/marvel-page/" className="link">Marvel Page</NavLink>
        <NavLink to="/func-components" className="link">Functional components</NavLink>
        <NavLink to="/redux" className="link">Redux</NavLink>
        <NavLink to="/react-libraries" className="link">React libraries</NavLink>
        <NavLink to="/training-page" className="link">Training page</NavLink>
        <NavLink to="/workers-page" className="link">Workers Page</NavLink>
        <NavLink to="/todo-light" className="link">ToDo light</NavLink>
        <NavLink to="/weather" className="link">Weather App</NavLink>
      </nav>
    </div>
  )
}

export default AppHeader