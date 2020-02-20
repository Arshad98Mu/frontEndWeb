import React,{Component} from 'react';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import NewDashboard from './newComponents/NewDashboard';
import Dashboard from './components/Dashboard/Dashoard';
import NewChatpage from './newComponents/NewChatpage';
import ChatTest from './components/ChatTest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "chattest"
    };
  }

  setCurrentPage = value => {
    this.setState({
      currentPage: value
    });
  }

  render() {
    return (
      <div>
        { this.state.currentPage === "signin" ? (
          <SigninPage setCurrentPage = {this.setCurrentPage} />
        ) : this.state.currentPage === "chattest" ? (
          <NewChatpage />
        ) : this.state.currentPage === "signup" ? (
          <SignupPage setCurrentPage = {this.setCurrentPage} />
        ) : <Home setCurrentPage = {this.setCurrentPage} />
        }
      </div>
    );
  }
}

export default App;