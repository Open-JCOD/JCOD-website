import React from "react";
import PropTypes from "prop-types";
// import Editor from "react-simple-code-editor";
// import styled, { css } from "styled-components";
import { highlight, languages } from "prismjs/components/prism-core";

import { EditorWrapper } from "./CodeViewer.styled";

// Default require for Prism
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";

// Optional require for prism
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";

// import "./prism-okaidia.css";
import "./prism-tomorrow.css";

export default class CodeViewer extends React.Component {
  static propTypes = {
    legend: PropTypes.string,
    theme: PropTypes.string,
    editable: PropTypes.bool
  };

  constructor(props) {
    super();

    this.state = {
      code:
        React.Children.map(props.children, child =>
          typeof child === "string" ? child : JSON.stringify(child)
        ).reduce((acc, portion) => `${acc ? acc + "\n" : ""}` + portion, "") ||
        "// Empty"
    };
  }

  render() {
    const { language: codeLanguage, editable, legend, theme } = this.props;
    const addedStyle = {
      ...(legend && { paddingTop: "2em" }),
      overflow: "unset"
    };
    return (
      <EditorWrapper
        value={this.state.code}
        className={`language-${codeLanguage}`}
        readOnly={!editable}
        legend={legend}
        theme={theme}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages[codeLanguage])}
        padding={"0.5em"}
        style={addedStyle}
      />
    );
  }
}
