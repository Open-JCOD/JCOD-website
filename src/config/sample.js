export const sampleHtml = [
  {
    key: "simple",
    comment: "Very simple element, without children or attributes",
    node: {
      component: "tr"
    }
  },
  {
    key: "classic",
    comment: "Typical simple element",
    node: {
      component: "strong",
      children: "Hello world",
      props: {
        class: "important-message"
      }
    }
  },
  {
    key: "advance",
    comment: "Complex element with JCOD tree as children",
    node: {
      component: "div",
      children: [
        "A JCOD tree with string inside a /DIV/",
        {
          component: "h3",
          children: "Welcome to JCOD world"
        },
        {
          component: "a",
          children: "You have write some HTML tag from JCOD",
          props: {
            href: "#some-link",
            class: "important-link",
            title: "Do you speak JCOD"
          }
        }
      ]
    }
  }
];

// // comment: "",
// // node:
// export const commentSampleHtml = [];

export const sampleWebComponent = [
  {
    component: "messenger-bubble",
    children: "Hello I am JCOD",
    props: {
      author: "JCOD",
      avatar: "jcod-logo",
      align: "left"
    }
  },
  {
    component: "messenger-bubble",
    children: "Cool !",
    props: {
      author: "Nicolas",
      avatar: "nicolas-avatar",
      align: "right"
    }
  },
  {
    component: "messenger-bubble",
    children: "Thanks !",
    props: {
      author: "JCOD",
      avatar: "jcod-logo",
      align: "left"
    }
  }
];

export const sampleReact = [
  {
    component: "MessengerBubble",
    children: "Hello I am JCOD.",
    props: {
      author: {
        id: 23,
        pseudo: "JCOD",
        avatar: "jcod-logo"
      },
      className: "left"
    }
  },
  {
    component: "MessengerBubble",
    children: "Nice to meet you, I am React.",
    props: {
      author: {
        id: 12,
        pseudo: "React",
        avatar: "react-logo"
      },
      className: "right"
    }
  },
  {
    component: "MessengerBubble",
    children:
      "I think we have a date together but before, do you have a parser ?",
    props: {
      author: {
        id: 23,
        pseudo: "JCOD",
        avatar: "jcod-logo"
      },
      className: "left"
    }
  }
];
