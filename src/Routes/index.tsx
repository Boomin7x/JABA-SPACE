import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/home';

const routes = createBrowserRouter([
   {
      path: '/',
      element: <Navigate to="/en" replace />,
   },
   {
      path: '/:lng',
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
      ],
   },
]);
export default routes;
