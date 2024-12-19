import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/home";
import App from "../App";
import Shop from "../Shop/shop";
import About from "../component/about";
import Blog from "../component/blog";
import ErrorPage from "../Errorpage";
import Singlebook from "../Shop/Singlebook";
import Dashboardlayout from "../Dashboard/dashboardlayout";
import Uploadbook from "../Dashboard/Uploadbook";
import Dashboard from "../Dashboard/Dashboard";
import Editbook from "../Dashboard/Editbook";
import Managebook from "../Dashboard/Managebook";
import Signup from "../component/Signup";
import Login from "../component/Login";
import Logout from "../component/Logout";
// import SideBar from "../Dashboard/Sidebar";
import PrivateRoute from "../protectedRoute/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
    //   element: <div>Hello world!</div>,
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        ,
        { path: "/shop", element: <Shop/> },
        { path: "/about", element: <About/> },
        { path: "/blog", element: <Blog/> },
        {
          path:"/book/:id",
          element:<Singlebook/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
      
      ],
    },
    {
      path: "/admin/dashboard",
      element: <Dashboardlayout />,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<Uploadbook/>
        },
        {
          path:"/admin/dashboard/edit/:id",
          element:<Editbook/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path:"/admin/dashboard/manage",
          element:<Managebook/>
        },
        // {
        //   path:"/admin/dashboard/sidebar",
        //   element:<SideBar/>
        // }
        

      ]
    },
    {
      path: "Signup",
      element: <Signup />
    },
    {
      path: "Login",
      element: <Login />
    },

    {
      path: "Logout",
      element: <Logout />
    }
  ]);
export default router