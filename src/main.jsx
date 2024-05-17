import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Header from './Component/Header/Header.jsx';
import Contact from './Component/Contact/Contact.jsx';
import About from './Component/About/About.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Registar from './Component/Registar/Registar.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   children:[
     {
     path:"/Header",
     element:<Header></Header>
    },
    {
      path:"/",
      element:<Home></Home>
    },
    {
     path:"/About",
     element:<About></About>
    },
    {
      path:"/Blogs",
      element:<Blog></Blog>
    },
    {
      path:"/Contact",
      element:<Contact></Contact>
    },
    {
      path:"/Registar",
      element:<Registar></Registar>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
