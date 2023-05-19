import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Component/Router/router';
import Authprovider from './Component/AuthProvider/Authprovider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
    <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
  </Authprovider>
)
