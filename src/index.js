import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet,useParams} from "react-router-dom";
import './sass/main.css';
import Error from './pages/Error.js';
import HomeApparts from './pages/HomeApparts'
import About from './pages/About';
import AppartsPages from './pages/AppartsPages';
import reportWebVitals from './reportWebVitals';
import Navbar from './componentsJs/Navbar';
import Banner from './componentsJs/Banner';
import Footer from './componentsJs/Footer';



const Layout = ()=> {
  return <div>
    <div className='page-layout'>
    <Navbar />
    <Outlet />
    </div>
    <Footer router={router}/>
  </div>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
  //  {   path: "/error",
  //     element:<Error />
  //   },
   {   path: "/",
      element:<div>
        <Banner />,
         <HomeApparts />
      </div>},
      { 
       path: "/about",
       element: <div>
        <Banner />
        <About />
        </div>,
     },
     { 
      path: "/appartments/:id",
      element: <AppartsPages />
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
