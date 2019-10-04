import styled, { css } from "styled-components";

export const SliceWrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: ${({ theme }) => theme.default || "currentColor"};
  background-color: ${({ theme }) => theme.enhancement || "transparent"};

  & h1,
  & h2,
  & h3 {
    color: ${({ theme }) => theme.main || "#0097a7"};
  }

  /*
  &.theme-color {
    color: #fff;
    background-color: #1565c0;
    background-color: #00796b;
    background-color: #0288d1;
    background-color: #0097a7;

    & h1,
    & h2,
    & h3 {
      color: #fff;
    }
  }
  &.theme-dark {
    color: #fff;
    background-color: #37474f;
    background-color: #222;
  }
  &.theme-dark-light {
    color: #fff;
    background-color: #bdbdbd;
  }
*/
`;

export const SliceWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 1450px;

  /* flex-direction: column; */
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  ${({ backgroundImage }) =>
    typeof backgroundImage === "object" &&
    css`
      /* min-height: 24em; */
      width: 100%;
      /* background-image: url(https://pixabay.com/get/55e7d4414856b108feda84608229347b113bd7ed564c704c732873d39448c75e/surfer-371224_1920.jpg); */
      background-image: url(${backgroundImage.url});
      background-position: center;
      background-size: cover;
      background-attachment: ${backgroundImage.fixed ? "fixed" : "scroll"};
      background-repeat: no-repeat;

      & .md-container {
        mix-blend-mode: difference;
        color: #fff;
        text-shadow: 0 0 4px #222;

        h1,
        h2,
        h3 {
          color: currentColor;
        }
      }
    `}

  @media (max-width: 449px) {
    ul {
      padding: 0 0.5em;
      list-style-position: inside;
      text-indent: -1em;
    }
  }

  @media (min-width: 450px) {
    &.row {
      padding: 1em;
      flex-direction: row;
      flex-direction: ${({ reverseOnDesk }) =>
        reverseOnDesk ? "row-reverse" : "row"};
      justify-content: center;
      align-items: flex-start;
      text-align: left;

      ${({ reverseOnDesk }) =>
        reverseOnDesk
          ? css`
              & > *:not(:first-child) {
                margin-right: 1em;
              }
              & > *:not(:last-child) {
                margin-left: 1em;
              }
            `
          : css`
              & > *:not(:first-child) {
                margin-left: 1em;
              }
              & > *:not(:last-child) {
                margin-right: 1em;
              }
            `};

      /* & > *:not(:first-child) {
        margin-left: 1em;
      }
      & > *:not(:last-child) {
        margin-right: 1em;
      } */
      & img {
        box-shadow: 0 0 0.6em 0em rgba(0, 0, 0, 0.8);
      }
    }

    &.column,
    &.column-stretch {
      padding: 0;
      flex-direction: ${({ reverseOnDesk }) =>
        reverseOnDesk ? "column-reverse" : "column"};
      justify-content: flex-start;
    }
    &.column {
      align-items: center;
      text-align: center;
    }
    &.column-stretch {
      align-items: stretch;
      text-align: initial;
    }
  }

  & > * {
    flex: 1 0 0;
    max-width: 100%;
    /* overflow: hidden; */
    align-self: stretch;
  }
`;
