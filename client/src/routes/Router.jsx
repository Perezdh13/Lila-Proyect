import React from 'react';
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../views/home/HomePage';
import Login from '../views/login/Login';

function Router() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  }, {
    path: "/login",
    element: <Login /> 
  }
  ])
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default Router