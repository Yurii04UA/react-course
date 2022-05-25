import React, { useEffect } from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";

import "./UseState.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
      slide: 0,
    };
  }

  changeSlide = (i) => {
    this.setState(({ slide }) => ({
      slide: slide + i,
    }));
  };

  toggleAutoplay = () => {
    this.setState(({ autoplay }) => ({
      autoplay: !autoplay,
    }));
  };

  render() {
    return (
      <Container>
        <h3> on class </h3>
        <div className="slider w-50 m-auto">
          <img
            className="d-block w-100"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt="slide"
          />
          <div className="text-center mt-5">
            Active slide {this.state.slide} <br />{" "}
            {this.state.autoplay ? "auto" : null}
          </div>
          <div className="buttons mt-3">
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(-1)}
            >
              -1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(1)}
            >
              +1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={this.toggleAutoplay}
            >
              toggle autoplay
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

//////////////////////////////// Fucnional components ↓

const SliderFunc = (props) => {
  const [slideState, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  function changeSlide(i) {
    setSlide((slideState) => slideState + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
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
          Active slide {slideState} <br /> {autoplay ? "auto" : null}
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
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

//////////////////  Counter on class ↓
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState((state) => {
      if (state.count < 50) {
        return { count: (state.count = state.count + 1) };
      }
    });
  };

  reset = () => {
    this.setState((state) => ({
      count: (state.count = 0),
    }));
  };

  decrease = () => {
    if (this.state.count > -50) {
      this.setState((state) => ({
        count: (state.count = state.count - 1),
      }));
    }
  };

  random = () => {
    return this.setState((state) => {
      let randomNumb = Math.floor(Math.random() * (50 - -50) + -50);
      return { count: (state.count = randomNumb) };
    });
  };

  render() {
    return (
      <>
        <h3 className="mt-5"> on class </h3>
        <div className="appCounter">
          <div className="counter">{this.state.count}</div>
          <div className="controls">
            <button onClick={this.increase}>INC</button>
            <button onClick={this.decrease}>DEC</button>
            <button onClick={this.random}>RND</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
      </>
    );
  }
}

//////////////////  Counter on func component ↓

const CounterFunc = (props) => {
  const [count, setCount] = useState(props.count);

  function incCount() {
    if (count < 50) {
      setCount((count) => count + 1);
    }
  }
  function decCount() {
    if (count > -50) {
      setCount((count) => count - 1);
    }
  }

  function randomCount() {
    setCount((count) => (count = Math.floor(Math.random() * (50 - -50) + -50)));
  }

  function resetCount() {
    setCount(props.count);
  }
  return (
    <>
      <h3 className="mt-5"> on func components </h3>
      <div className="appCounter">
        <div className="counter">{count}</div>
        <div className="controls">
          <button onClick={incCount}>INC</button>
          <button onClick={decCount}>DEC</button>
          <button onClick={randomCount}>RND</button>
          <button onClick={resetCount}>RESET</button>
        </div>
      </div>
    </>
  );
};

const Exchange = (props) => {
  const [currency, setCurrency] = useState(props.currency);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  /// принимаем данные
  const fetchData = async () => {
    const result = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
    );
    const res = await result.json();

    setData(
      res.map((item) => {
        const container = {};
        container.cc = item.cc;
        container.rate = item.rate;
        return container;
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeCurrency = (curren) => {
    setCurrency(props.currency);
    const [curr] = data.filter((item) => item.cc === curren);
    setCurrency((props.currency * curr.rate).toFixed(2));
  };

  return (
    <>
      <h3 className="mt-5"> exchange on func components </h3>
      <div className="appCounter ">
        <div className="counter">{currency}</div>
        <div className="controls">
          <button
            disabled={loading ? true : false}
            name="EUR"
            onClick={() => changeCurrency("EUR")}
          >
            Euro €
          </button>
          <button
            disabled={loading ? true : false}
            name="USD"
            onClick={() => changeCurrency("USD")}
          >
            USD $
          </button>
          <button
            disabled={loading ? true : false}
            name="CZK"
            onClick={() => changeCurrency("CZK")}
          >
            CZK Kč
          </button>
          <button
            disabled={loading ? true : false}
            name="XAU"
            onClick={() => changeCurrency("XAU")}
          >
            Золото
          </button>
        </div>
      </div>
    </>
  );
};


//////// Custom hook
function useCount(init) {
  const [value, setValue] = useState(init);
  const incCount = () => {
    if (value < 50) {
      setValue((count) => count + 1);
    }
  };
  const decCount = () => {
    if (value > -50) {
      setValue((count) => count - 1);
    }
  };
  const randomCount = () => {
    setValue((count) => (count = Math.floor(Math.random() * (50 - -50) + -50)));
  };

  const resetCount = () => {
    setValue(init);
  };
  return {value, incCount,decCount,randomCount,resetCount}
}

const RandomNumb = () => {
  // const [count, setCount] = useState(0);

  // function incCount() {
  //   if (count < 50) {
  //     setCount((count) => count + 1);
  //   }
  // }
  // function decCount() {
  //   if (count > -50) {
  //     setCount((count) => count - 1);
  //   }
  // }

  // function randomCount() {
  //   setCount((count) => (count = Math.floor(Math.random() * (50 - -50) + -50)));
  // }

  // function resetCount() {
  //   setCount(0);
  // }
  
  const count = useCount(2)
  
  return (
    <>
      <h3 className="mt-5"> on func components </h3>
      <div className="appCounter">
        <div className="counter">{count.value}</div>
        <div className="controls">
          <button onClick={count.incCount}>INC</button>
          <button onClick={count.decCount}>DEC</button>
          <button onClick={count.randomCount}>RND</button>
          <button onClick={count.resetCount}>RESET</button>
        </div>
      </div>
    </>
  );
};

function UseState() {
  return (
    <div>
      <Slider />
      <SliderFunc />
      <Counter />
      <CounterFunc count={0} />
      <Exchange currency={100} />
      <RandomNumb />
    </div>
  );
}

export default UseState;
