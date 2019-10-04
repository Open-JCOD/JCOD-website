import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  onClick = () => {
    const { onClick } = this.props;
    return onClick();
  };

  render() {
    const { children } = this.props;

    return (
      <a className="button" href="#get-started" onClick={this.onClick}>
        {children}
      </a>
    );
  }
}
