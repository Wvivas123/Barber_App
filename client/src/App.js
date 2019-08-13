import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import './App.css';
import Signup from "./components/Signup";
import Client from "./components/Client";
import Barber from './components/Barber';
import { loadUser } from './actions/authActions'
import store from './store';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/barber" component={Barber} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

