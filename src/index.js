import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard/Dashoard";
import Firebase, { FirebaseContext } from "./firebase/Index";

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route path={"/login"} component={SigninPage} />
        <Route path={"/signUp"} component={SignupPage} />
        <Route path={"/home"} component={Dashboard} />
      </Switch>
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
);

{
  /* <Router>
<Provider store={store}>
  <Notifications options={{ zIndex: 2000 }} />
  <Switch>
    <Route exact path={"/"} component={App} />
    <Route path={"/login"} component={LoginComponent} />
    <Route path={"/signUp"} component={SignUpComponent} />
    <Route path={"/forgot"} component={ForgotPassword} />
    <Route path={"/otp"} component={OtpCheck} />
    <Route path={"/verify"} component={NewPasswordOtp} />
    <Route component={NotFoundPage} />
  </Switch>
</Provider>
</Router> */
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
