import { indent } from "indent.js";
import * as sample from "./sample";

function convertQuote(str) {
  return (
    str
      .replace(/\\/g, "\\\\")
      .replace(/\//g, "\\/")
      .replace(/"/g, '\\"')
      //   .replace(/'/g, "\\'")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/\n/g, "\\n")
  );
}

function parseJCOD(jcodTree, availableComponents) {
  const options = {
    minify: false,
    stringMaxLenght: 60,
    autoCloseTag: true
  };
  const fctIndentCode = code =>
    !options.minify ? indent.html(code, { tabString: "    " }) : code;

  const strIndented = str => {
    const sizeMax = options.stringMaxLenght;
    return typeof str != "string" || str.length < sizeMax
      ? str
      : str
          .split("\n")
          .map(line =>
            line.split(" ").reduce((acc, word, i, arr) => {
              if (i === 0) return word;
              if (!arr[i + 1]) return acc + " " + word;
              const nbLine = acc.split("\n").length;
              return acc.length + arr[i + 1].length < sizeMax * nbLine
                ? acc + " " + word
                : acc + " \n" + word;
            }, "")
          )
          .join("\n");
  };

  const jcodToMarkup = jcodObject => {
    if (typeof jcodObject === "string") return jcodObject;
    const { component, children, props = {} } = jcodObject;

    const typeofNode = Array.isArray(children) ? "array" : typeof children;
    let childrenNode;
    switch (typeofNode) {
      case "array":
        childrenNode = parseJCOD(children, availableComponents);
        break;
      case "object":
        childrenNode = jcodToMarkup(children);
        break;
      case "string":
        childrenNode = children;
        break;
      default:
        childrenNode = null;
    }

    const attr = Object.entries(props);

    const needIndentAttributes = !options.minify && attr.length > 1;
    const attributes = attr.length
      ? attr.reduce((acc, [key, _value]) => {
          let value;
          switch (typeof _value) {
            case "string":
              value = convertQuote(_value);
              break;
            case "object":
              value = JSON.stringify(_value, null, 2);
              break;
            case "number":
              value = _value;
              break;
            default:
              value = _value.toString();
          }
          return `${acc}${needIndentAttributes ? "\n" : " "}${key}${
            value ? `="${value}"` : ""
          }`;
        }, "")
      : "";
    const soon = childrenNode
      ? `${
          !options.minify &&
          (attr.length ||
            typeof childrenNode != "string" ||
            childrenNode.length + component.length * 2 + "<></>".length >
              options.stringMaxLenght)
            ? " \n " + strIndented(childrenNode) + "\n "
            : childrenNode
        }`
      : "";

    // TODO : Add auto closed tag
    return `<${component}${attributes}${
      options.autoCloseTag && !soon ? "/>" : `>${soon}</${component}>`
    }`;
  };

  return fctIndentCode(
    `${[]
      .concat(jcodTree)
      .map(jcodObject => jcodToMarkup(jcodObject))
      .join(!options.minify ? "\n" : "")}`
  );
}

function sampleObjectFromJCOD(jcod) {
  return {
    jcod: convertQuote(JSON.stringify(jcod, null, 2)),
    markup: convertQuote(parseJCOD(jcod))
  };
}

const jcodTreeSamples = [
  {
    component: "my-component",
    props: {
      "first-attribute":
        "any valid JSON value like string, number, array, etc.",
      "second-attribute": ["array", "of", 4, "entries"],
      "third-attribute": 'String with "quotes"',
      "fourth-attribute": {
        can: "also",
        be: "an object"
      }
    },
    children:
      "Children can be a string (with 'quotes' or \"double quotes\"), a JCOD node or a JCOD tree.",

    // All JCOD node can be extended with any options key-value you need.
    extraKey: "Any valid JSON value"
  },
  {
    component: "other",
    props: {
      attr1: "first value",
      attr2: "second value"
    },
    children: "String Children"
  },
  {
    component: "other",
    props: { attr: "value" },
    children: [
      "String of anything",
      {
        component: "other",
        props: {
          attr1: "first value",
          attr2: "second value"
        },
        children: "String Children"
      }
    ]
  },
  {
    component: "other",
    props: { attr: "value", attr2: "value2" }
  }
];

const sampleA = {
  component: "my-component",
  children: "Children can be a string, a JCOD node or a JCOD tree or toto.",
  props: {
    "first-attribute": "any string value",
    "second-attribute": "another value",
    children: "you can set 'children' as an attribute key name",
    quotes: 'You can also use "quotes"'
  }
};

const jcodPresentation = {
  component: "jcod-presentation",
  children: [
    "Hello world",
    "I am JCOD.",
    "I was designed to simplify your life as a developer."
  ],
  props: {
    "just-one-thing": "Long live to JCOD !"
  }
};

const basicSample = {
  component: "my-component",
  children: "Hello world",
  props: {
    "just-one-thing": "Long live to JCOD !"
  }
};

const jcodObjectDesc = `{
  component: /REQUIRE/ 
        STRING // "TagName of component",
  children: /NOT-REQUIRE/ 
        STRING // "'String' contained inside the tag component",
        (or) JCOD-OBJECT // "{Component} contained inside the tag component",
        (or) ARRAY-OF-STRING-OR-OBJECT // "'String' and/or {Components} contained inside the tag component",
  props: /NOT-REQUIRE/
        JCOD-PROPS-OBJECT // "List of Key-value who defined the attributes of component"
}`;

const constData = {
  test: "toto",
  sampleOld: {
    jcod: convertQuote(
      JSON.stringify(
        {
          component: "my-component",
          props: {
            "first-attribute":
              "any valid JSON value like string, number, array, etc.",
            "second-attribute": ["array", "of", 4, "entries"],
            "third-attribute": {
              can: "also",
              be: "an object"
            }
          },
          children: "Children can be a string, a JCOD node or a JCOD tree.",

          // All JCOD node can be extended with any options key-value you need.
          extraKey: "Any valid JSON value"
        },
        null,
        2
      )
    ),
    markup: convertQuote(`<my-component  
    first-attribute="any valid JSON value like string, number, array, etc."  
>Children can be a string, a JCOD node or a JCOD tree or toto.</my-component>`)
    // value: convertQuote(
    //   `<my-component first-attribute="any" >Children can be a string, a JCOD node or a JCOD tree or toto.</my-component>`
    // )
  },
  sampleOld2: {
    jcod: convertQuote(
      JSON.stringify(
        {
          component: "my-component",
          props: {
            "first-attribute": "any string value",
            "second-attribute": "another value",
            children: "you can set 'children' as an attribute key name"
          }
        },
        null,
        2
      )
    ),
    markup: convertQuote(`<my-component  
    first-attribute="any string value"  
    second-attribute="another value"
>Children can be a string, a JCOD node or a JCOD tree or toto.</my-component>`)
  },
  basicSample: sampleObjectFromJCOD(basicSample),
  sampleA: sampleObjectFromJCOD(sampleA),
  sampleB: sampleObjectFromJCOD(jcodTreeSamples),

  jcodPresentation: sampleObjectFromJCOD(jcodPresentation),
  jcodObjectDesc: convertQuote(jcodObjectDesc),

  sample: {
    html: sampleObjectFromJCOD(
      sample.sampleHtml.reduce(
        (acc, { comment, node }) =>
          acc.concat((comment ? [`// ${comment}`] : []).concat(node)),
        []
      )
    ),
    htmlDetails: sample.sampleHtml.reduce(
      (acc, { key, comment, node }) => ({
        ...acc,
        [key]: {
          legend: comment,
          ...sampleObjectFromJCOD(node)
        }
      }),
      {}
    ),
    webComponent: sampleObjectFromJCOD(sample.sampleWebComponent),
    react: sampleObjectFromJCOD(sample.sampleReact)
  }
};

export default constData;
