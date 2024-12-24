import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import AllFoods from "../pages/AllFoods/AllFoods";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import AddFood from "../pages/AddFood/AddFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import MyFoods from "../pages/MyFoods/MyFoods";
import MyOrders from "../pages/MyOrders/MyOrders";



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
                path: 'add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
            },
            {
                path: 'update-food/:foodId',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.foodId}`)
            },
            {
                path: 'foods/:foodId',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.foodId}`)
            },
            {
                path: 'food-purchase/:foodId',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.foodId}`)
            },
            {
                path: 'my-foods/:emailId',
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/email/${params.emailId}`)
            },
            {
                path: 'my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;