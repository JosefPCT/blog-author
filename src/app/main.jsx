import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
// import App from '../App.jsx'
// import Test from './TestComponent.jsx'
import routes from './routes.jsx'

const routesRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test /> */}
    <RouterProvider  router={routesRouter}/>
  </StrictMode>,
)
