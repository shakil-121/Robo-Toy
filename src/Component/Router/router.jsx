import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authontication/Login";
import Registration from "../Pages/Authontication/Registration";
import Error from "../Error/Error";
import Blog from "../Pages/Blog";
import AllToy from "../Pages/AllToy";
import AddToy from "../Pages/Home/OtherComponent/AddToy";
import Toy from "../Pages/Home/OtherComponent/Toy";
import MyToys from "../Pages/MyToys";
import UpdateToy from "../Pages/Home/OtherComponent/UpdateToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      }, 
      {
        path:"/blog", 
        element:<Blog></Blog>
      },
      {
        path:"/alltoy", 
        element:<AllToy></AllToy>
      },
      {
        path:"/addtoy", 
        element:<AddToy></AddToy>
      },
      {
        path:'/toy/:id', 
        element:<Toy></Toy>, 
        loader:({params})=>fetch(`https://robo-toy-server-shakil-121.vercel.app/toys/${params.id}`)
      },
      {
        path:"/mytoys", 
        element:<MyToys></MyToys>
      }, 
      {
        path:"/update/:id", 
        element:<UpdateToy></UpdateToy>, 
        loader:({params})=>fetch(`https://robo-toy-server-shakil-121.vercel.app/toys/${params.id}`)
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  }
]);

export default router;
