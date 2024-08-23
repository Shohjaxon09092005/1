import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import Home from './page/Home';
import Admin from './page/Admin';
import AdminCategory from './component/AdminCategory';
import AdminProducts from './component/AdminProducts';
import AdminPLP from './component/AdminPLP';
import AdminPDP from './component/AdminPDP';
import PLP from './page/PLP';
import Register from './page/Register';
import Login from './page/Login';
import SignIn from './page/SignIn';
import PDP from './page/PDP';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [{
    path: '/',
    element: <Home />
  },
    
  {
    path: '/PLP',
    element: <PLP />
  },
  {
    path: '/PDP/:ID',
    element: <PDP />
  },
  {
    path: '/PLP/:ID',
    element: <PLP />
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/sign',
    element: <SignIn/>
  },
  {
    path: '/login/:ID',
    element: <Login/>
  },
  ],
},
{
  path: '/admin',
  element: <Admin />

}, {
  path: '/adminCategory',
  element: <AdminCategory />
},
{
  path: '/adminProducts',
  element: <AdminProducts />
},
{
  path: '/adminPLP',
  element: <AdminPLP />
},
{
  path: '/adminPDP',
  element: <AdminPDP />
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

