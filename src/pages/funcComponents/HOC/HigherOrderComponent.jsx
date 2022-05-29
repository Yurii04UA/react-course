import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const withSlider = (BaceComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
      setSlide(getData());
    }, []);

    function changeSlide(i) {
      setSlide((slide) => slide + i);
    }
    return (
      <BaceComponent
        {...props}
        slide={slide}
        autoplay={autoplay}
        setSlide={setSlide}
        setAutoplay={setAutoplay}
        changeSlide={changeSlide}
      />
    );
  };
};

const getDataFromFirstFetch = () => {
  return 10;
};
const getDataFromSecondFetch = () => {
  return 20;
};

const SliderFirst = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">Active slide {props.slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderSecond = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {props.slide} <br />
          {props.autoplay ? "auto" : null}{" "}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-5)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(5)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.setAutoplay((autoplay) => !autoplay)}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

/// обертка 
const withLoger = WrappedComponent => props => {
  useEffect(() => {
    console.log(`first render. Hello ${props.name}`);
  })
  return <WrappedComponent {...props} />
}
const Hello = () => {
  return <h1>Hello</h1>;
};

const HelloWithLogger = withLoger(Hello)
const HigherOrderComponent = () => {
  return (
    <div>
      <NavLink className="link container mb-3 w-75" to="/func-components">
        {" "}
        ← Back
      </NavLink>

      <p>Компонент высшего порядка (Higher-Order Component, HOC)</p>
      <>
        <HelloWithLogger name='Yurii' />
        <SliderWithFirstFetch />
        <SliderWithSecondFetch />
      </>
    </div>
  );
};

export default HigherOrderComponent;
