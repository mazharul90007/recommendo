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
import RecommendationForMeDetails from "../Pages/RecommendationForMeDetails/RecommendationForMeDetails";
import MyRecommendation from "../Pages/MyRecommendation/MyRecommendation";
import MyRecommendationDetails from "../Pages/MyRecommendationDetails/MyRecommendationDetails";
import UpdateQuery from "../Pages/UpdateQuery/UpdateQuery";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://recommendo-server.vercel.app/queries')
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
        path:'/myRecommendation',
        element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>
      },
      {
        path: '/addQueries',
        element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
      },
      {
        path: '/queries',
        element: <Queries></Queries>,
        loader: () => fetch('https://recommendo-server.vercel.app/queries')
      },
      {
        path: '/myQueries',
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
      },
      {
        path: '/queryDetails/:id',
        element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://recommendo-server.vercel.app/queries/${params.id}`)
      },
      {
        path: '/updateQuery/:id',
        element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
        loader: ({ params }) => fetch(`https://recommendo-server.vercel.app/queries/${params.id}`)
      },
      {
        path: '/recommendationForMe/:id',
        element: <PrivateRoute>
          <RecommendationForMeDetails></RecommendationForMeDetails>
        </PrivateRoute>,
        loader: ({params})=>fetch(`https://recommendo-server.vercel.app/recommendationForMe/${params.id}`)
      },
      {
        path: '/myRecommendation/:id',
        element: <PrivateRoute>
          <MyRecommendationDetails></MyRecommendationDetails>
        </PrivateRoute>,
        loader: ({params})=>fetch(`https://recommendo-server.vercel.app/myRecommendation/${params.id}`)
      },
    ]
  },
]);

export default router