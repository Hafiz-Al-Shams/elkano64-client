import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import AllFoods from "../pages/AllFoods/AllFoods";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>,
            },
            {
                path: 'all-foods',
                element: <AllFoods></AllFoods>,
                loader: () => fetch(`http://localhost:5000/foods`)
            },
            {
                path: 'foods/:foodId',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.foodId}`)
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;