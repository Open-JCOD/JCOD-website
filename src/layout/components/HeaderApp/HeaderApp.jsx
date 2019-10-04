import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./HeaderApp.css";

export default class HeaderInsideEvent extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <header className="app-header-wrapper">
        <div className="app-header">
          <div>
            <h1>
              <img
                className="logo"
                src="/img/JCOD-Logo-advance-white.png"
                alt="JCOD"
              />
            </h1>
            {/* JCOD */}
          </div>
          <nav className="app-header-nav">
            <Link to="/">More</Link>
          </nav>
        </div>
      </header>
    );
  }
}
