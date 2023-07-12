const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc"},
  "Hello World From React!"
); // It is React Element or Javascript Object

console.log(heading); // object
console.log(typeof(heading));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render method converts react element or javascript object into html element & put it into provided location to render method. 

