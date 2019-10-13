# JCOD

Website of JCOD.

![JCOD Logo](https://raw.githubusercontent.com/Open-JCOD/JCOD-website/master/public/img/JCOD-Logo-advance-small.png)

## About

JCOD is a data-interchange format, a subset of JSON. It help of dynamically build layout from a list of Template Components, to code faster, improved isolation and stop with the static layout.

Sample of JCOD :

```json
// This JCOD... :
{
  "component": "jcod-presentation",
  "children": [
    "Hello world",
    "I am JCOD.",
    "I was designed to simplify your life as a developer."
  ],
  "props": {
    "just-one-thing": "Long live to JCOD !"
  }
}
```

## How JCOD works and how use it?

JCOD requires a parser to be interpreted to a rendering tool (such as React, Vue.JS or the DOM of the Navigator).
JCOD is only an object syntax specification. So the range of capabilities or performance, totally dependent on the parser that will be used.

**Note:**

All HTML elements can be considered as the default Web Components given by the browser. Some are very simple, like the `<div>`, `<span>` or other `<section>`. Other, like `<video>` element, are more complex.
Finally, HTML elements and Components are exactly used in the same way.

So, for all these reasons, and even if this is not the original purpose, **JCOD can also be used for calling the HTML Elements**, in addition to **web components** or any **Components** based on any render library (like React, Vue.js, Svelte or any other), to compose a web view to replacing the XML/HTML/JSX/MDX/Any Other syntax.
