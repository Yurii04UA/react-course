import React from 'react'
import "./ReactLib.css"
import { NavLink } from 'react-router-dom'


const ReactLibraries = () => {
  return (
     <>
     {/* <NavLink className='link container mb-3 w-75' to='/react-libraries'> ← Back</NavLink> */}
     <div className='container'>
       
      <NavLink className="link tr-page " to='/react-libraries/react-transition-group'>React transition Group </NavLink>
      <NavLink className="link tr-page " to='/react-libraries/formik'>Formik </NavLink>
      <NavLink className="link tr-page " to='/react-libraries/something'>something </NavLink>
    </div>
     </>
    
  )
}

export default ReactLibraries