import React from "react";
import "./App.css";
import SigninPage from "./components/signinPage";
import SignupPage from "./components/SignupPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPage: "login"
    };
  }

  setInitialPage = value => {
    this.setState({
      initialPage: value
    });
  };

  render() {
    return (
      <div>
        {this.state.initialPage === "login" ? (
          <SigninPage setInitialPage={this.setInitialPage} />
        ) : (
          <SignupPage setInitialPage={this.setInitialPage} />
        )}
      </div>
    );
  }
}

export default App;
