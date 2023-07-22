// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc"},
//   "Hello World From React!"
// );
// It is a React Element or Javascript object
// Concept of nested Divs
const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "div1"
}, React.createElement("div", {
    id: "div2"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "Hello World!"),
    React.createElement("h1", {
        id: "h1"
    }, "Hello World!"),
    React.createElement("h1", {
        id: "h1"
    }, "Hello World!")
])));
console.log(heading); // object
console.log(typeof heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render method converts react element or javascript object into html element & put it into provided location to render method.

//# sourceMappingURL=index.6bd02f5a.js.map
