import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Routes/Home.jsx'
import Countries from './components/Routes/Countries.jsx'
import Single from './components/Routes/Single.jsx'
import Flag from './components/Routes/Flag.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: 'home', index: true, element: <Home /> },
      {
        path: "country",
        element: <Countries />,
        children: [
          {
            path: ':id',
            element: <Single />
          },
          {

            index: true,
            element: <Flag />
          }

        ]
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
