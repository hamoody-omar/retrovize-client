import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import "./app.css";
import Navbar from "./components/layout/NavigationBar";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { setShowLoginModal } from "./actions/modalActions";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Host from "./components/host/Host";
import HostPersonal from "./components/host/host-personal-car/HostPersonal";
import AccountSettings from "./components/account/AccountSettings";
import ViewListings from "./components/listings/ViewListings";

/*import "./App.css";

import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import store from "./store";


import Dashboard from "./components/dashboard/Dashboard";

import { clearCurrentProfile } from "./actions/profileActions";
import CreateProfile from "./components/create-profile/CreateProfile"; */

// check for token
if (localStorage.jwToken) {
  // set auth token header auth
  setAuthToken(localStorage.getItem("token"));
  // Decode token and get user into and exp
  const decoded = jwt_decode(localStorage.jwToken);

  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());

    // Redirect to login
    store.dispatch(setShowLoginModal());
  }
}
/*<Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
    </Provider>*/
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <React.Fragment>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/host-car" component={Host} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/host-personal-car"
                  component={HostPersonal}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/account-settings"
                  component={AccountSettings}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/view-listings"
                  component={ViewListings}
                />
              </Switch>
            </React.Fragment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
