import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Catalogue from "./page/Catalogue/Catalogue";
import Articles from "./page/Articles/Articles";
import Login from "./page/Login/Login";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";
import Register from "./page/Register/Register";
import Root from "./page/Root";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import { AuthProvider } from "./page/Login/AuthContext";
import { CartProvider } from "./page/Cart/CartContext";
import { ArticleProvider } from "./page/Articles/ArticleContext";
import "./index.css";
import UpdateUser from "./page/UpdateUser/UpdateUser";
import DeleteUser from "./page/DeleteUser/DeleteUser";
import Cart from "./page/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "catalogue", element: <Catalogue /> },
      { path: "articles", element: <Articles /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <ContactUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "update-user", element: <UpdateUser /> },
      { path: "delete-user", element: <DeleteUser /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <ArticleProvider>
          <RouterProvider router={router} />
        </ArticleProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
