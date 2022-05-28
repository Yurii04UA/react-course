import { React, useState, useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { autoplay: !state.autoplay };
    case "slow":
      return { autoplay: 300 };
    case "fast":
      return { autoplay: 700 };
   default:
      throw new Error()
  }
}

const SliderFunc = () => {
  const [slideState, setSlide] = useState(0);
  // const [autoplay, setAutoplay] = useState(false);
  const [autoplay, dispatch] = useReducer(reducer,false);

  function changeSlide(i) {
    setSlide((slideState) => slideState + i);
  }

  return (
    <Container>
      <h3> on func components </h3>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {slideState} <br /> {autoplay.autoplay ? "auto" : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "toggle" })}
          >
            toggle
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "slow" })}
          >
            toggle slow
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: "fast" })}
          >
            toggle fast
          </button>
        </div>
      </div>
    </Container>
  );
};

const UseReducer = () => {
  return (
    <div>
      <NavLink className="link container mb-3 w-75" to="/func-components">
        {" "}
        ← Back
      </NavLink>
      <SliderFunc />
    </div>
  );
};

export default UseReducer;
