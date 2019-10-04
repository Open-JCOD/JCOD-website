import "intersection-observer"; // optional polyfill

import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Observer from "@researchgate/react-intersection-observer";

import "./LayoutHeader.css";

const md = `![JCOD](/img/JCOD-Logo-advance-small.png)
# JSON as Component Object Description
`;

export default class LayoutHeader extends Component {
  static propTypes = {};

  options = {
    onChange: this.handleIntersection
    // root: "#scrolling-container",
    // rootMargin: "0% 0% -25%"
  };

  handleIntersection(event) {
    // console.log("handleIntersection >", event.isIntersecting);
  }

  handleClick = () => {
    const goUrl = "https://forms.gle/XzT8ukH8dqrTFx9q6";
    window.location.href = goUrl;
  };

  render() {
    return (
      <Observer {...this.options}>
        <section className="layout-header-wrapper">
          <div className="layout-header">
            <div className="text">
              <ReactMarkdown source={md} />
            </div>
          </div>
        </section>
      </Observer>
    );
  }
}
