import React, { Component } from "react";
import PropTypes from "prop-types";

import { ImgWrapper, Img } from "./SliceFullPict.styled";

export default class SliceFullPict extends Component {
  static propTypes = {
    src: PropTypes.string, //URL
    alt: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    const { className, src, alt = "" } = this.props;
    return (
      <ImgWrapper
        fadeTop={true}
        fadeBottom={true}
        className={className || null}
      >
        <Img src={src} alt={alt} />
      </ImgWrapper>
    );
  }
}
