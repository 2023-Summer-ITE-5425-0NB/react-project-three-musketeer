import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Catalogue from './page/Catalogue/Catalogue';
import Articles from './page/Articles/Articles';
import Login from './page/Login/Login';
import ContactUs from './page/ContactUs/ContactUs';
import AboutUs from './page/AboutUs/AboutUs';
import Register from './page/Register/Register';
import Root from './page/Root';
import './index.css'

const router = createBrowserRouter([{
  path: "/", element: <Root />,
  children: [
    { path: 'about', element: <AboutUs /> },
    { path: 'catalogue', element: <Catalogue /> },
    { path: 'articles', element: <Articles /> },
    { path: 'login', element: <Login /> },
    { path: 'contact', element: <ContactUs /> },
    { path: 'contact', element: <ContactUs /> },
    { path: 'register', element: <Register /> },
  ]
}])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)