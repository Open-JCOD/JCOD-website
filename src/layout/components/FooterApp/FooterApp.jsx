import React, { Component } from "react";
// import PropTypes from "prop-types";

import "./FooterApp.css";

export default class FooterInsideEvent extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <footer className="app-footer-wrapper">
        {/* 
          <div className="app-footer app-footer-menu">
            <div className="app-footer-col">
              <h3>Details</h3>
              <nav>
                <Link to="/documentation">About us (A propos de nous ?)</Link>
                <a
                  href="https://facebook.github.io/create-react-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Events
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </nav>
            </div>
            <div className="app-footer-col">
              <h3>Informations Légales</h3>
              <nav>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CGU / CGV
                </a>
                <a
                  href="https://facebook.github.io/create-react-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookies & données personnelles
                </a>
              </nav>
            </div>
            <div className="app-footer-col">
              <h3>Community</h3>
              <nav>
                <a
                  href="https://facebook.github.io/create-react-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </nav>
            </div>
          </div>
        */}
        <div className="app-footer app-footer-copyright">
          <div className="app-footer-logo">
            <img src="/img/JCOD-Logo-advance-white.png" alt="JCOD" />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nicolaskokla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              An original idea of Nicolas KOKLA
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
