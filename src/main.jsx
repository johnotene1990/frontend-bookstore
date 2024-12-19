import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import router from './route/router'
import Authprovider from './contexts/Authprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    {/* <App /> */}
  </StrictMode>,
)
