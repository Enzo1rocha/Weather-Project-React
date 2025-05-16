import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/updatePassword'
import WelcomePage from './pages/WelcomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/forgot',
    element: <ForgotPassword />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot/updatePassword',
    element: <UpdatePassword />
  },
  {
    path: '/navbar',
    element: <Navbar />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 