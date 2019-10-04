import React, { Component } from "react";

export default class SampleTemplateLayer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        --- Sample of template ---
        {children}
      </div>
    );
  }
}
