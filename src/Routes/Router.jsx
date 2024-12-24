import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import Registration from "../Pages/Registration/Registration";
import RecommendationForMe from "../Pages/RecommendationForMe/RecommendationForMe";
import PrivateRoute from "./PrivateRoute";
import AddQueries from "../Pages/AddQueries/AddQueries";
import MyQueries from "../Pages/MyQueries/MyQueries";
import Queries from "../Pages/Queries/Queries";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";



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

        },
        {
          path: '/addQueries',
          element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
          path: '/queries',
          element: <PrivateRoute><Queries></Queries></PrivateRoute>,
          loader: ()=> fetch('http://localhost:3000/queries')
        },
        {
          path: '/myQueries',
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
        },
        {
          path: '/queryDetails/:id',
          element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/queries/${params.id}`)
        }
      ]
    },
  ]);

  export default router