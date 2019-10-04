export const colorPalette = {
  tools: {
    code2color: ([r, g, b], a) => `rgba(${r}, ${g}, ${b}, ${a})`,
    color2rgba: (color, a) => {
      const colorCodeRGB = color.match(/^(?:rgb(?:a?)\()(.+)(?:\))/i);
      const hexSize = color.length < 6 ? "1" : "2";
      //   const hexSize = "2";
      const colorCodeHEX = new RegExp(
        `^#?([a-f\\d]{${hexSize}})([a-f\\d]{${hexSize}})([a-f\\d]{${hexSize}})$`,
        "i"
      ).exec(color);
      //   const colorCode =
      //     colorCodeRGB || colorPalette.tools.hex2rgb(colorCodeHEX);

      if (colorCodeRGB) {
        console.log("colorCodeRGB >", colorCodeRGB);
        const [r, g, b] = colorCodeRGB[1].split(",").map(s => +s);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }
      if (colorCodeHEX) {
        console.log("colorCodeHEX >", colorCodeHEX);
        const [, r, g, b] = colorCodeHEX.map(v =>
          hexSize === "1" ? `${v}${v}` : v
        );
        console.log("colorCodeHEX DESC >", r, g, b);
        return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(
          b,
          16
        )}, ${a})`;
      }
      return null;
    },
    hex2rgb: (hex, a) => {
      const colorCode = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!colorCode) return null;
      const [r, g, b] = colorCode[1];
      return a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    }
  },
  white: "#fff",
  black: "#000",
  dark: "#222",
  darkLight: "#dedede",
  light: "#fff",
  // primary: "#0097a7",
  primary: "#FBC02D",
  // secondary: "#FBC02D"
  secondary: "#fecc02"
};

const theme = {
  default: {
    default: colorPalette.black,
    main: colorPalette.primary,
    enhancement: colorPalette.light,
    decoration: colorPalette.secondary
  },
  color: {
    default: colorPalette.black,
    main: colorPalette.dark,
    enhancement: colorPalette.primary,
    decoration: colorPalette.secondary
  },
  light: {
    default: colorPalette.black,
    main: colorPalette.primary,
    enhancement: colorPalette.light,
    decoration: colorPalette.secondary
  },
  lightSecondary: {
    default: colorPalette.black,
    main: colorPalette.secondary,
    enhancement: colorPalette.light,
    decoration: colorPalette.primary
  },
  dark: {
    default: colorPalette.white,
    main: colorPalette.primary,
    enhancement: colorPalette.dark,
    decoration: colorPalette.secondary
  },
  darkSecondary: {
    default: colorPalette.white,
    main: colorPalette.secondary,
    enhancement: colorPalette.dark,
    decoration: colorPalette.primary
  },
  darkLight: {
    default: colorPalette.black,
    main: colorPalette.primary,
    enhancement: colorPalette.darkLight,
    decoration: colorPalette.secondary
  },
  darkLightSecondary: {
    default: colorPalette.black,
    main: colorPalette.secondary,
    enhancement: colorPalette.darkLight,
    decoration: colorPalette.primary
  },
  primary: {
    default: colorPalette.black,
    main: colorPalette.light,
    enhancement: colorPalette.primary,
    decoration: colorPalette.secondary
  },
  secondary: {
    default: colorPalette.black,
    main: colorPalette.primary,
    enhancement: colorPalette.secondary,
    decoration: colorPalette.light
  }
};

export default theme;
