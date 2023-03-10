import {
    createBrowserRouter,
  } from "react-router-dom";
import YourComponent from "./components/images";
import Select from "./components/inputselect";
import Auth from "./screens/auth";
import Confirm from "./screens/confirm";
import Home from "./screens/home";
import Polling from "./screens/pol";
import Pvcr from "./screens/pvcready";
import Pvc from "./screens/pvcreg";
import Pvcs from "./screens/pvcstatus";
import Success from "./screens/succes";
import Verify from "./screens/verify2";

  export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
      path: '/auth',
      element: <Auth />,
  },
  {
    path: '/verify2',
    element: <Verify/>,
},
{
  path: '/confirm',
  element: <Confirm/>,
},
{
  path: '/inputselect',
  element: <Select/>,
},
{
  path: '/pol',
  element: <Polling/>,
},
{
  path: '/succes',
  element: <Success/>,
},
{
  path: '/succes',
  element: <Success/>,
},
{
  path: '/pvcreg',
  element: <Pvc/>,
},
{
  path: '/pvcready',
  element: <Pvcr/>,
},
{
  path: '/pvcstatus',
  element: <Pvcs/>,
},


  ]);
  