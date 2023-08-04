import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componants/Header";
import Body from "./componants/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Error from "./componants/Error";
import RestaurentMenu from "./componants/RestaurentMenu";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc"},
//   "Hello World From React!"
// );

// It is a React Element or Javascript object

// Concept of nested Divs

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "div1" },
//     React.createElement("div", { id: "div2" }, [
//       React.createElement("h1", { id: "h1" }, "Hello World!"),
//       React.createElement("h1", { id: "h1" }, "Shivam Jha"),
//       React.createElement("h1", { id: "h1" }, "Ankit Singh"),
//     ])
//   )
// );

// console.log(heading); // object
// console.log(typeof heading);

// React.createElement => React Element (JS Object) => HTML Element (render method)

// const heading = React.createElement("h1", { id: "head" }, "Hello World!");

// JSX => React.createElement => React Element (JS Object) => HTML Element (render method)

// const jsxheading = [
//   <h1 id="head">Hello World from JSX! hdhah</h1>,
//   <div>
//     hey!, This is Shivam
//     <div>
//       hey!, This is Shivam
//       <div>
//         <ol>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//           <li>hey!, This is Shivam</li>
//         </ol>
//       </div>
//     </div>
//   </div>,
// ];

// console.log(heading); // object
// console.log(jsxheading); // object

// const Title = () => (
//   <h1 className="head">
//     Hello World From JSX!
//   </h1>
// );

// React Component - Functional React Component (New) & Class React Component (Old)

// Functional React Component

// const number = 100000;
// let name = "SHIVAM KUMAR JHA"

// const footer = <h3>Hey Everyone from a react element</h3>

// const HeaderComponent = () => (
//   <div id="container">
//     <Title />
//     <Title></Title>
//     {[Title(), number, name, footer]}
//     {footer}

//     <h1 className="header">Hey! This is shivam</h1>
//   </div>
// );

// const dearlife = ([
//   <HeaderComponent/>,
//   <div>
//     {HeaderComponent()}
//   </div>,
//   <h2 className="life">
//     Life is very beautyful.
//   </h2>
// ])

// const HeaderComponent1 = () => <h1>Hey! This is shivam</h1>;

// console.log(HeaderComponent);
// console.log(typeof HeaderComponent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// render method converts react element or javascript object into html element & put it into provided location to render method.

// root.render(heading);
// root1.render(jsxheading);

// root.render(dearlife);

// Planning of building a shoping cart

/**
 * Header
 *  - logo
 *  - nav-items
 * Body
 *  - Searchbar
 *  - res-container
 *      - res-cards (res-image, res-name, casins, retting)
 *  Footer
 *    - Copyright
 *    - Links
 *
 */





const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
