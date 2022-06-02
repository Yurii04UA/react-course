import React from "react";
import { NavLink } from "react-router-dom";
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = 0;
const reducer = (state =0, action) => {
   switch(action.type){
      case "INC": 
         return state +1 ;
      case "DEC":
         return state -1;
      default :
         return state
   }
   
   
}

const store = createStore()



// let state = reducer(initialState,{type:'INC'})
// console.log(state);
// state = reducer(state,{type:'INC'})
// console.log(state);
// state = reducer(state,{type:'INC'})
// console.log(state);
// state = reducer(state,{type:'INC'})
// console.log(state);
// state = reducer(state,{type:'DEC'})
// console.log(state);
const ReduxSanbox = () => {
  return (
    <>
      <NavLink className="link container mb-3 w-75" to="/redux">
        {" "}
        ← Back
      </NavLink>
      <div className="container">


      </div>
    </>
  );
};

export default ReduxSanbox;
