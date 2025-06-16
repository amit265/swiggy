import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import ResDetail from "./components/ResDetail.jsx";
import Cart from "./components/Cart.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/swiggy/",
    element: <App />,
    children: [
      {
        path: "/swiggy/",
        element: <Body />,
      },
      {
        path: "/swiggy/about",
        element: <About />,
      },
      {
        path: "/swiggy/contact",
        element: <Contact />,
      },
      {
        path: "/swiggy/:resId",
        element: <ResDetail />,
      },
      {
        path: "/swiggy/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
