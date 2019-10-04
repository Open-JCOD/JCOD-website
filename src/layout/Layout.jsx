import React, { Fragment, PureComponent } from "react";
import JcodParser from "jcod-react-parser";
import { Route, Switch } from "react-router-dom";

import * as templates from "templates";

import { HeaderApp, LayoutHeader, FooterApp } from "./components";

import { withRouteContext } from "react-router-json-routes-loader";

const parserOption = {
  htmlElement: true,
  // customElement: true,
  // allowElements: ['div', 'popup-info'],
  allowElements: ["popup-info"]
};

class Layout extends PureComponent {
  render() {
    const { dataRoute } = this.props;
    // console.log("dataRoute >>", dataRoute);
    return (
      <Fragment>
        <HeaderApp />
        <LayoutHeader buttonString="Yhea yhea mano !" />

        <section className="layout-content">
          <JcodParser
            components={templates}
            data={dataRoute.jcodContent}
            options={parserOption}
          />
        </section>

        <FooterApp />
      </Fragment>
    );
  }
}

export default withRouteContext(Layout, Route, Switch);
