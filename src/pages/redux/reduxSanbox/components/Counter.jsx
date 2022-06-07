import React from "react";
import { connect } from "react-redux";
import {inc,dec,rnd} from '../actions';
import { bindActionCreators } from "redux";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.value)
  const dispatch = useDispatch()
  return (
    <div className="jumbotron m-5">
      <h1>{counter}</h1>
     
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        {" "}
        INC
      </button>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        {" "}
        DEC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">
        {" "}
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
    smth: state.foo,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   const {inc,dec,rnd} = bindActionCreators(actions,dispatch)
//   return {
//     inc: inc,
//     dec: dec,
//     rnd: rnd,
//   };
// };

// // export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, actions)(Counter);
export default Counter