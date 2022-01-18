import React from "react";

class Counter extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  add() {
    this.setState({
      value: this.state.value + 1
    })
  }

  minus() {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="plus" onClick={(e) => this.add(e)}>+</button>
        <div className="count">{this.state.value}</div>
        <button className="minus" onClick={this.state.value > 0 ? (e) => this.minus(e) : false}>-</button>
      </div>
    )
  }
}

export default Counter;