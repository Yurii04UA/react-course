import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
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
    return this.setState((state) => {
      if (state.count > -50) {
        return { count: (state.count = state.count - 1) };
      }
    });
  };

  random = () => {
    return this.setState((state) => {
      let randomNumb = Math.floor(Math.random() * (50 - -50) + -50);
      return { count: (state.count = randomNumb) };
    });
  };

  render() {
    return (
      <div className="appCounter">
        <div className="counter">{this.state.count}</div>
        <div className="controls">
          <button onClick={this.increase}>INC</button>
          <button onClick={this.decrease}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }
}

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default Counter;
