import styled, { css } from "styled-components";

import { colorPalette } from "config";

const { color2rgba } = colorPalette.tools;

export const ImgWrapper = styled.div`
  position: relative;
  line-height: 0;

  ${({ fadeTop, theme }) =>
    fadeTop === true &&
    css`
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        height: 80%;
        background: ${theme.enhancement || "transparent"};
        background: linear-gradient(
          180deg,
          ${color2rgba(theme.enhancement, 1)} 0%,
          ${color2rgba(theme.enhancement, 0.8)} 20%,
          ${color2rgba(theme.enhancement, 0)} 60%
        );
      }
    `}

  ${({ fadeBottom, theme }) =>
    fadeBottom === true &&
    css`
      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        right: 0;
        height: 80%;
        background: ${({ theme }) => theme.enhancement || "transparent"};
        background: linear-gradient(
          0deg,
          ${({ theme }) => color2rgba(theme.enhancement, 1)} 0%,
          ${({ theme }) => color2rgba(theme.enhancement, 0.8)} 20%,
          ${({ theme }) => color2rgba(theme.enhancement, 0)} 60%
        );
      }
    `}

  /*
  &.fade-top:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    height: 80%;
    background: ${({ theme }) => theme.enhancement || "transparent"};
    background: linear-gradient(
      180deg,
      ${({ theme }) => color2rgba(theme.enhancement, 1)} 0%,
      ${({ theme }) => color2rgba(theme.enhancement, 0.8)} 20%,
      ${({ theme }) => color2rgba(theme.enhancement, 0)} 60%
    );
  }
  */

  /* &.fade-bottom:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    background: ${({ theme }) => theme.enhancement || "transparent"};
    background: linear-gradient(
      0deg,
      ${({ theme }) => color2rgba(theme.enhancement, 1)} 0%,
      ${({ theme }) => color2rgba(theme.enhancement, 0.8)} 20%,
      ${({ theme }) => color2rgba(theme.enhancement, 0)} 60%
    );
  } */
`;

export const Img = styled.img``;

// .slice-full-pict {
//     position: relative;
//     line-height: 0;
//   }
//   .slice-full-pict.fade-top:before {
//     position: absolute;
//     content: "";
//     background-color: #37474f;
//     height: 80%;
//     width: 100%;
//     background: rgb(55, 71, 79);
//     background: linear-gradient(
//       180deg,
//       rgba(55, 71, 79, 1) 0%,
//       rgba(55, 71, 79, 0.8) 20%,
//       rgba(55, 71, 79, 0) 60%
//     );
//   }
