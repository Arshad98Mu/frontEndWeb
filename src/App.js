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
    console.log("naivgate");
    if (value === "signin") {
      this.setState({
        currentPage: value
      });
    } else if (value === "signup") {
      this.setState({
        currentPage: value
      });
    } else this.props.history.push("home");
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "signin" ? (
           <FirebaseContext.Consumer>
          
          {firebase => (
              <SigninPage
                firebase={firebase}
                setCurrentPage={this.setCurrentPage}
              />
            )}
          </FirebaseContext.Consumer>
        ) : this.state.currentPage === "chattest" ? (
          <NewIntroPage />
        ) : this.state.currentPage === "signup" ? (
          //<SignupPage setCurrentPage={this.setCurrentPage} />
          <FirebaseContext.Consumer>
            {firebase => (
              <SignupPage
                firebase={firebase}
                setCurrentPage={this.setCurrentPage}
              />
            )}
          </FirebaseContext.Consumer>
        ) : (
          <Home setCurrentPage={this.setCurrentPage} />
        )}
      </div>
    );
  }
}

export default App;
