import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { Favorites } from './pages/Favorites'
import { ErrorPage } from './pages/Error'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/movie/:id',
          element: <Movies />
        },
        {
          path: '/favorites',
          element: <Favorites />
        }
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
