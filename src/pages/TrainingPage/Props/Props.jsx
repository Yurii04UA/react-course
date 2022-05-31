import React from "react";
import { Component } from "react";
import BootstrapTest from "../BootstrapTest/BootstrapTest";
import "./Props.css";

// https://www.udemy.com/course/javascript_full/learn/lecture/28569043#overview  - styled component
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
      <div className="props">
        <button onClick={this.nextYear}>{this.state.text}</button>
        <button onClick={this.prevYear}>---</button>
        <h1>
          My name is {name}, surname -{surmane} . I am {years} years old. I am{" "}
          {this.state.position}
        </h1>
        <a href={link}>My profile</a>

        <form className="formProps">
          <span>Entet text</span>
          <Field type="text" onChange={(e) => this.inputChanges(e, "red")} />
        </form>
      </div>
    );
  }
}

const DynamicGreating = (props) => {
  return (
    <div className={"mb-3 p-3 border border-" + props.color}>
      {/* {props.children} */}
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: "shadow p-3 m-3 border rounded",
        });
      })}
    </div>
  );
};

const HelloGreating = () => {
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <DynamicGreating color={"primary"}>
        <h2>Hello world!!</h2>
      </DynamicGreating>
    </div>
  );
};

const Message = (props) =>{
  return (
    <h2>The counter is {props.count}</h2>
  )

  
}

class Counter extends Component{
  state = {
    count :0
  }

  changeCount = () => {
    this.setState(({count}) => ({
      count :count +1
    }))
  }

  render(){
    return(
      
      <>
      <h2>{this.state.count}</h2>
      {/* <Message count ={this.state.count}/>  {/* ← жесткая привязка компоненетов */}
      {this.props.render(this.state.count)}
        <button
          className={'btn btn-primary'}
          onClick={this.changeCount}
        >click me</button>
      </>
    )
  }
}


/// Как свойство можно передавать:
// - обьект  // name={{firsName: 'Yurii3'}}  елемент выглядит так My name is {name.firsName}
// - функцию // name={()=> {return 'Yurii func'}}  елемент выглядит так My name is {name()}
const Props = () => {
  return (
    <div className="container">
      <Counter render ={count => (
        <Message count={count} />
      )}/>
      <WhoImI
        name={"Yurii"}
        surmane="Paraka"
        link="https://translate.google.com/?hl=ru"
      />
      <WhoImI
        name="Oleg"
        surmane="Pavaka"
        link="https://translate.google.com/?hl=ru"
      />

      <HelloGreating />
      <BootstrapTest
        left={
          <DynamicGreating color={"primary"}>
            <h2>Hello.</h2>
            <h2>This is props.children.</h2>
          </DynamicGreating>
        }
        right={
          <DynamicGreating color={"success"}>
            <h2>Hello, this is props.children</h2>
          </DynamicGreating>
        }
      />
    </div>
  );
};

export default Props;
