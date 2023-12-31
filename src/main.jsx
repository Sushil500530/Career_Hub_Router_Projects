import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import './index.css' ;

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import ApliedJob from './Components/ApliedJob/ApliedJob';
import JobDetails from './Components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/applied",
        loader: () => fetch('/jobs.json'),   // warning:---only load the data you need . do not load all the data
        element: <ApliedJob></ApliedJob>
      },
      {
        path: "/statistics",

      },
      {
        path: "/blog"
      },
      {
        path: "/jobs",

      },
      {
        path: "/jobs/:id",
        loader: () => fetch(`../jobs.json`) , // do not load all data,load only name
        // loader: ({params}) => fetch(`../public/jobs.json/${params.id}`),
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
