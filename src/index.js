import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import BlogsListPage from './pages/BlogsListPage';
import BlogPage from './pages/BlogPage';
import AuthorPage from './pages/AuthorPage';
 
const router = createBrowserRouter([
 {
   path: "/",
   element: <BlogsListPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
   },

   {
    path: "/author",
    element: <AuthorPage />,
   },
  
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
