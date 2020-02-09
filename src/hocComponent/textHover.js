import React, { Component } from "react";
import hocComponent from "./hocComponent";

class TextHover extends Component {
  render() {
    let { increaseCounter, counter } = this.props;
    return <h2 onMouseOver={increaseCounter}>Hover on {counter}</h2>;
  }
}

export default hocComponent(TextHover);
