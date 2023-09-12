import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './sass/main.css';
import Error from './componentsJs/Error.js';
import Home from './pages/Home';
import About from './pages/About';
import Pages from './pages/Pages';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentsJs/Navbar';
import Banner from './componentsJs/Banner';
import Footer from './componentsJs/Footer';


const Layout = ()=> {
  return <>
  <Navbar />
  <Banner />
  <Outlet />
  <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
   {   path: "/",
      element: <Home />},
      { 
       path: "/about",
       element: <About />,
     },
     { 
      path: "/appartments",
      element: <Pages />
    },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
