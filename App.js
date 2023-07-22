// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc"},
//   "Hello World From React!"
// );

// It is a React Element or Javascript object


// Concept of nested Divs

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(  
    "div",
    { id: "div1" }, 
    React.createElement(
      "div",
      { id: "div2" },
      React.createElement("div", { id: "div3"}, "Hello World!")
    )
  )
);

console.log(heading); // object
console.log(typeof heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render method converts react element or javascript object into html element & put it into provided location to render method.
