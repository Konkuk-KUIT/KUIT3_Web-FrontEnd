import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
// 라우터 생성
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/store",
          element: <Stores />,
        },
        {
          path: "/store/:storeId",
          element: <Store />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
// 생성한 라우터 전달
// RouterProvider를 사용하기에, BrowserRouter로 감쌀 필요 X
};

export default Router;
