import React from "react";
import { NavLink } from "react-router-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
// import { inc, dec, rnd } from "./actions";
import * as actions from "./actions";
import { Provider } from "react-redux";

import App from "./components/App";

const store = createStore(reducer);

// const { dispatch, subscribe, getState } = store;


// const bindActionCreator = (creator,dispatch) => (...args) => {
//   dispatch(creator(...args))
// }
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const ReduxSanbox = () => {
  return (
    <>
      <NavLink className="link container mb-3 w-75" to="/redux">
        {" "}
        ← Back
      </NavLink>
      <div className="container">
        {/* <Counter counter={getState().value}
          inc={inc}
          dec={dec}
          rnd={()=>{
            const value = Math.floor(Math.random*10)
            rnd(value)
          }}
        /> */}
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    </>
  );
};

export default ReduxSanbox;
