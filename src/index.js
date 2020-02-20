import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard/Dashoard'

ReactDOM.render(<Router>
    
      
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route path={"/login"} component={SigninPage} />
        <Route path={"/signUp"} component={SignupPage} />    
        <Route path={"/home"} component={Dashboard} />
      </Switch>
    
    </Router>, document.getElementById('root'));

//<Router>
//  <Provider store={store}>
//    <Notifications options={{ zIndex: 2000 }} />
//    <Switch>
//      <Route exact path={"/"} component={App} />
//      <Route path={"/login"} component={LoginComponent} />
//      <Route path={"/signUp"} component={SignUpComponent} />
//      <Route path={"/forgot"} component={ForgotPassword} />
//      <Route path={"/otp"} component={OtpCheck} />
//      <Route path={"/verify"} component={NewPasswordOtp} />
//      <Route component={NotFoundPage} />
//    </Switch>
//</Provider>
//</Router>

serviceWorker.unregister();
