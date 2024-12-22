import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import Registration from "../Pages/Registration/Registration";
import RecommendationForMe from "../Pages/RecommendationForMe/RecommendationForMe";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signin',
            element: <Signin></Signin>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/recommendationForMe',
            element: <PrivateRoute><RecommendationForMe></RecommendationForMe></PrivateRoute>

        }
      ]
    },
  ]);

  export default router