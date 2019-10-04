import React, { Component } from "react";
import PropTypes from "prop-types";

import "./LayoutHeader.css";

export default class LayoutHeader extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <section className="layout-header-wrapper">
        <div className="layout-header">
          <h1>Create React CLI</h1>
          <p>Set up your modern web app from a Boilerplate</p>
          <p>
            <a className="button" href="#get-started">
              Get Started
            </a>
          </p>
        </div>
        <div className="layout-header-logo">
          <img src="/img/react-1-logo-svg-vector-white.svg" alt="logo" />
        </div>
      </section>
    );
  }
}
