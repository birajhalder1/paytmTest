import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Load components
import Landing from "./components/layouts/Landing";
import PayRequest from "./components/layouts/PayRequest";

class MyRoute extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pay" component={PayRequest} />
        </div>
      </Router>
    );
  }
}

export default MyRoute;
