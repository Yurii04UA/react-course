import React from "react";
import { Component, Fragment } from "react";
import "./Props.css";

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
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "++",
      position: "worker",
    };
    this.nextYear = this.nextYear.bind(this); // привязка this
  }
  /// если ивенты записывать как методы, а не через стрелочную функцию надо будет то this потеряется и надо привязать This к методу. Выше пример
  nextYear() {
    this.setState((state) => ({
      years: (state.years = state.years + 1),
    }));
  }
  prevYear = () => {
    this.setState((state) => ({
      years: (state.years = state.years - 1),
    }));
  };

  inputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surmane, link } = this.props;
    const { position, years } = this.state;
    return (
      <Fragment>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <button onClick={this.prevYear}>---</button>
        <h1>
          My name is {name}, surname -{surmane} . I am {years} years old. I am{" "}
          {this.state.position}
        </h1>
        <a href={link}>My profile</a>

        <form className="formProps">
          <span>Entet text</span>
          <input type="text" onChange={(e) => this.inputChanges(e, "red")} />
        </form>
      </Fragment>
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
        name="Oleg"
        surmane="Pavaka"
        link="https://translate.google.com/?hl=ru"
      />
    </div>
  );
};

export default Props;
