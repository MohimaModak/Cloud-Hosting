import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Pricing from "./assets/Component/Pricing/Pricing";
import Security from "./assets/Component/Security/Security";
import Testimonial from "./assets/Component/Testimonial/Testimonial";
import HowItWorks from "./assets/Component/HowItWorks/HowItWorks";
import FAQ from "./assets/Component/FAQ/FAQ";
import Contact from "./assets/Component/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/security",
        element: <Security></Security>,
      },
      {
        path: "/Testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/HowItWorks",
        element: <HowItWorks></HowItWorks>,
      },
      {
        path: "/Faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
