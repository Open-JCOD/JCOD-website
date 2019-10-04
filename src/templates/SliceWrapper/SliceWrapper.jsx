import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { theme as appTheme } from "config";
import { SliceWrapContainer, SliceWrap } from "./SliceWrapper.styled";

import "./SliceWrapper.css";

export default class SliceWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    direction: PropTypes.oneOf(["row", "column", "column-stretch"]),
    reverseOnDesk: PropTypes.bool,
    backgroundImage: PropTypes.shape({
      url: PropTypes.string,
      fixed: PropTypes.bool
    }),
    theme: PropTypes.oneOf(["default", "color"]) // TODO : Update this values
  };

  static defaultProps = {
    direction: "row",
    reverseOnDesk: false
  };

  render() {
    const {
      backgroundImage,
      children,
      direction,
      reverseOnDesk,
      theme = "default"
    } = this.props;

    // console.log(appTheme, theme, appTheme[theme]);

    return (
      <ThemeProvider theme={appTheme[theme]}>
        <SliceWrapContainer
          // theme={appTheme[theme]}
          className={`${theme ? `---theme-${theme}` : ""}`}
        >
          <SliceWrap
            className={direction}
            reverseOnDesk={reverseOnDesk}
            backgroundImage={backgroundImage}
          >
            {React.Children.map(children, child => {
              const {
                type: Element,
                props: { children: childrenOfChild, ...otherProps }
              } = child;
              return typeof child !== "string" ? (
                // ? React.cloneElement(child, { theme })
                <Element theme={theme} {...otherProps}>
                  {childrenOfChild}
                </Element>
              ) : (
                child
              );
            })}
          </SliceWrap>
        </SliceWrapContainer>
      </ThemeProvider>
    );
  }
}
