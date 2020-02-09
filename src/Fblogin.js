import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Fblogin extends Component {
  componentClicked(response) {
    console.log(response);
  }
  responseFacebook = response => {
    console.log(response);
  };
  render() {
    return (
      <div>
        <FacebookLogin
          appId="508083239717318"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default Fblogin;
