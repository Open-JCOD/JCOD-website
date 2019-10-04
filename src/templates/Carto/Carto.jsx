import React, { Component } from "react";
// import PropTypes from 'prop-types'

import { CartoMapbox } from "components";

export default class Carto extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <div>
        <CartoMapbox />
      </div>
    );
  }
}
