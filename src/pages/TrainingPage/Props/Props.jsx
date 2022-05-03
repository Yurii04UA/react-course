import React from "react";
import { Component } from "react";

/////////////////////////////////////////////////// Functional components

// // const WhoImI = (props)=>{ // можно деструктуризировать props
// // ({props.name})

// const WhoImI = ({name,surmane,link})=>{
//   return (
//     <div>
//       <h1>My name is {name}, surname -{surmane} </h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }
// /// Как свойство можно передавать:
// // - обьект  // name={{firsName: 'Yurii3'}}  елемент выглядит так My name is {name.firsName}
// // - функцию // name={()=> {return 'Yurii func'}}  елемент выглядит так My name is {name()}
// const Props = () => {
//   return (
//     <div className='container'>

//       <WhoImI name={'Yuroo'} surmane="Praka" link="https://translate.google.com/?hl=ru"/>
//       <WhoImI name="Ole" surmane="Pavaka" link="https://translate.google.com/?hl=ru"/>
//     </div>
//   )
// }

// export default Props

/////////////////////////////////////////////////// Class components

class WhoImI extends Component {
  constructor(props){
    super(props)
    this.state = {
      years: 27,
      text: '++'
    }

  }

  nextYear = ()=>{
    this.setState(state => ({
      years: state.years = state.years+1
    }))
  }
  prevYear = ()=>{
    this.setState(state => ({
      years: state.years = state.years-1
    }))
  }

  render() {
     const {name, surmane,link} = this.props
    return (
     
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <button onClick={this.prevYear}>---</button>
        <h1>
          My name is {name}, surname -{surmane}{" "}. I am {this.state.years} years old
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

/// Как свойство можно передавать:
// - обьект  // name={{firsName: 'Yurii3'}}  елемент выглядит так My name is {name.firsName}
// - функцию // name={()=> {return 'Yurii func'}}  елемент выглядит так My name is {name()}
const Props = () => {
  return (
    <div className="container">
      <WhoImI
        name={"Yuro"}
        surmane="Praka"
        link="https://translate.google.com/?hl=ru"
      />
      <WhoImI
        name="Ole"
        surmane="Pavaka"
        link="https://translate.google.com/?hl=ru"
      />
    </div>
  );
};

export default Props;
