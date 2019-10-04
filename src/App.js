import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "layout";
import "./App.css";

import { withRouteProvider } from "react-router-json-routes-loader";
import { routeProviderOptions } from "config";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout.Switch userProps="Hey ! It's me, Luigi ! " />
        </Router>
      </div>
    );
  }
}

export default withRouteProvider(App, routeProviderOptions);
