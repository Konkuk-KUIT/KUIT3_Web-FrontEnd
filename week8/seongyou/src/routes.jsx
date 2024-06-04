import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/stores",
        element: <Stores/>
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default routes;