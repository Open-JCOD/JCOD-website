import React from "react";

import "./ExposeAllJcode.css";

function createMarkup() {
  return {
    __html: `<div
  theme="default"
  just-one-thing="Long live to JCOD !"
  class="jcod-presentation"
>
  <img
    class="logo"
    alt="JCOD"
    src="/img/JCOD-Logo-advance-small.png"
  />
  <div class="bubble">
    <div class="content">Hello world.
      I am JCOD.
      I was designed to simplify your life as a developer.</div>
  </div>
</div>`
  };
}

const ExposeAllJcode = React.memo(function ExposeAllJcode(props) {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
});
export default ExposeAllJcode;
