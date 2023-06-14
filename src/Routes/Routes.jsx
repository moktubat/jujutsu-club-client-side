import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../pages/Dashboard/MyClasses/MyClass";
import PrivateRoutes from "./PrivateRoutes";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import History from "../pages/Dashboard/History/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "allInstructors",
        element: <AllInstructors></AllInstructors>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'myClass',
        element: <MyClass></MyClass>        
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>        
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'history',
        element: <History></History>
      }
    ]
  }
]);
