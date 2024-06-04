import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Board from './pages/Board';
import Content from './pages/Content';
import Write from './pages/Write';

import Loading from './pages/Loading';

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Board />,
    },
    {
      path: '/content/:id',
      element: <Content />,
    },
    {
      path: '/write',
      element: <Write />,
    },
    {
      path: 'loading',
      element: <Loading />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
