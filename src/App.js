import React, { Component } from "react";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home";
import ChatTest from "./components/ChatTest";
import NewIntroPage from "./components/newIntro/NewIntroPage";
import { FirebaseContext } from "./firebase/Index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "signup"
    };
  }

  setCurrentPage = value => {
    this.setState({
      currentPage: value
    });
  };

  render() {
    return (
      <div>
        <FirebaseContext.Consumer>
          {this.state.currentPage === "signin" ? (
            <SigninPage setCurrentPage={this.setCurrentPage} />
          ) : this.state.currentPage === "chattest" ? (
            <NewIntroPage />
          ) : this.state.currentPage === "signup" ? (
            //<SignupPage setCurrentPage={this.setCurrentPage} />
            firebase => <SignupPage firebase={firebase} />
          ) : (
            <Home setCurrentPage={this.setCurrentPage} />
          )}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default App;
