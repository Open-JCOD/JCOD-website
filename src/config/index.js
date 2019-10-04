import Mustache from "mustache";
import constData from "./constant";

export { default as theme, colorPalette } from "./theme";
export const routeProviderOptions = {
  urlRegister: "/routes/index.json",
  registerFormater: registerContent => registerContent.register,
  payloadFormater: (registerRaw, formatedRouteData, payload) => {
    // console.log(">>>", Mustache.render(JSON.stringify(payload), constData));
    // console.log(
    //   ">>>",
    //   JSON.parse(Mustache.render(JSON.stringify(payload), constData))
    // );
    return JSON.parse(Mustache.render(JSON.stringify(payload), constData));
  }
};
