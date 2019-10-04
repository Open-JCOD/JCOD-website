import Editor from "react-simple-code-editor";
import styled, { css } from "styled-components";

export const EditorWrapper = styled(Editor)`
  font-family: "Fira code", "Fira Mono", monospace;
  font-size: 0.85em;
  background: rgb(40, 45, 52);
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 0.6em 0em;
  flex: 1 1 0%;
  /* align-self: stretch; */

  @media (min-width: 450px) {
    border-radius: 0.4em;
  }
  ${({ readOnly }) =>
    readOnly &&
    css`
      & textarea {
        outline: none;
      }
    `}

  ${({ legend, theme }) =>
    legend &&
    css`
      padding-top: 2em;

      &:before {
        content: "${legend}";
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        display: inline-block;
        padding: 0 0.3em;
        border-bottom: 1px dotted;
        border-radius: .2em;
        ${
          theme === "code-light"
            ? css`
                color: #fff;
                background: rgba(40, 45, 52, 0.85);
                border-color: #000;
              `
            : css`
                color: #000;
                background: rgba(256, 256, 256, 0.85);
                border-color: #fff;
              `
        };
      }
  `}

  ${({ theme, legend }) =>
    theme === "code-light" &&
    css`
      background: rgba(256, 256, 256, 0.75);
      color: #000;
      box-shadow: rgba(0, 0, 0, 0.8) 0px -1em 0.6em -1em inset,
        rgba(0, 0, 0, 0.8) 0px 1em 0.6em -1em inset;
}
      @media (min-width: 450px) {
        box-shadow: none;
        border: 1px dotted #ccc;
      }
    `}

  .column > &,
  .column-stretch > & {
    margin: 0 1em;
  }
  .row .column > &,
  .row .column-stretch > & {
    margin: unset;
  }
  /* .column &:first-child,
  .column-stretch &:first-child {
    margin-top: 2em;
    margin-bottom: 2em;
  } */
`;
