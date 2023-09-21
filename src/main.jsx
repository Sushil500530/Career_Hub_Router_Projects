import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import './index.css' ;

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
