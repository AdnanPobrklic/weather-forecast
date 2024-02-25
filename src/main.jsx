import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"
import WeatherData from "./pages/Weather-Data.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
    errorElement: <NotFound />
  },
  {
    path: "/weather-forecast",
    element: < WeatherData />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
< RouterProvider router={router} />
)
