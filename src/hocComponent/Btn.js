import React, { Component } from "react";
import hocComponent from "./hocComponent";

class Btn extends Component {
  render() {
    let { counter, increaseCounter } = this.props;
    return <button onClick={increaseCounter}>Click {counter}</button>;
  }
}

export default hocComponent(Btn);
