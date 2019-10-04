import React, { Component } from "react";

export default class SampleTemplateLayerImage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        --- Sample of template with Image ---
        {children}
      </div>
    );
  }
}
