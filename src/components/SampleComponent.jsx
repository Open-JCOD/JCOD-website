import React, { Component } from 'react'

export default class SampleComponent extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        --- Sample of template ---
        {children}
      </div>
    )
  }
}
