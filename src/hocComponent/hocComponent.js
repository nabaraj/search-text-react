import React from "react";

const hocComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      this.increaseCounter = this.increaseCounter.bind(this);
    }
    increaseCounter() {
      let { counter } = this.state;
      counter = counter + 1;
      this.setState({
        counter
      });
    }
    render() {
      return (
        <OriginalComponent
          counter={this.state.counter}
          increaseCounter={this.increaseCounter}
        />
      );
    }
  }

  return NewComponent;
};

export default hocComponent;
