import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
