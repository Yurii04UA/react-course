import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount(){
//      document.title = `Slide ${this.state.slide}`
//   }
//   componentDidUpdate(){
//      document.title = `Slide ${this.state.slide}`
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <h3> on class </h3>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{" "}
//             {this.state.autoplay ? "auto" : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

//////////////////////////////// Fucnional components ↓

const SliderFunc = (props) => {
  const [slideState, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  function logging() {
    console.log("you are hyq");
  }
  //  // Что бы вызвать хук один раз надо добавить в второй аргумент пустой масив
  //   useEffect(() => {
  //      console.log('effect start');
  //      document.title = `Slide ${slideState}`
  //   },[])
  // Что бы хук не применялся когда наш элем не изменился нужно добавить 2м аргументом useEffect(() => {}, [arr]) масив зависимостей
   // Для отписки надо вернуть функцию
  useEffect(() => {
    console.log("effect");
    document.title = `Slide ${slideState}`;
    window.addEventListener('click',logging)
   return () => (window.removeEventListener('click',logging))  /// ← для отписки от ивента
  }, [slideState]);

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

function UseEffect() {
   const [slider,setSlider] = useState(true)
  return (
    <div>
        <NavLink className='link container text-end w-75' to='/func-components'> ← Back</NavLink>
       <>
       <button className="d-block" onClick={()=> setSlider(!slider)}>click</button>
      {/* <Slider /> */}
      {slider ? <SliderFunc />: null}</>
    </div>
  );
}

export default UseEffect;
