import React from 'react'
import {  Route, Routes, NavLink,Link } from "react-router-dom";
import "./AppHeader.css"

const AppHeader = () => {
  return (
    <div>
       <nav className="navBar">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/test" className="link">test</NavLink>
        <NavLink to="/test2" className="link">test</NavLink>
        <NavLink to="/test3" className="link">test</NavLink>
        <NavLink to="/test4" className="link">test</NavLink>
        <NavLink to="/test5" className="link">test</NavLink>
        <NavLink to="/test6" className="link">test</NavLink>
      </nav>
    </div>
  )
}

export default AppHeader