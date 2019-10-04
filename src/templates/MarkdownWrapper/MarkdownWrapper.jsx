import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";

const MdWrapper = styled.div`
  padding: 0.3em 2em 1em;
  /* padding: 0 2em; */
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  /* @media (min-width: 450px) {
    padding: 2em;
  } */
  code[class *="language-"],
  pre[class *="language-"] {
    color: #000;
  }
`;

export default class MarkdownWrapper extends Component {
  static propTypes = {
    md: PropTypes.string.isRequired,
    align: PropTypes.string
  };

  render() {
    const { md, align } = this.props;
    return (
      <div>
        <MdWrapper className="md-container" align={align}>
          <ReactMarkdown source={md} />
        </MdWrapper>
      </div>
    );
  }
}
