import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const homeURL = process.env.PUBLIC_URL || "";
console.log(homeURL);
const router = createBrowserRouter([
  {
    path: homeURL,
    element: <App />,
  },
  {
    path: homeURL + "/about",
    element: <About />,
  },
  {
    path: homeURL + "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Routes>
      <Route path={homeURL + "/"} element={<App/>}/>
      <Route path={homeURL + "React_hosting_pages/contact"} element={<Contact/>}/>
      <Route path={homeURL + "React_hosting_pages/about"} element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
