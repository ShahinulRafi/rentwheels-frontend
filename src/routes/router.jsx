import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import ForgotPassword from "../pages/ForgotPassword";
import AddCar from "../pages/AddCar";
import BrowseCars from "../pages/BrowseCars";
import MyBookings from "../pages/MyBookings";
import CarDetails from "../pages/CarDetails";
import UpdateBookings from "../pages/UpdateBookings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/cardetails/:carId",
        loader: async ({ params }) => {
          const res = await fetch("/allCars.json");
          const cars = await res.json();

          const car = cars.find((c) => c.carId === parseInt(params.carId));
          return car;
        },
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcar",
        element: <AddCar></AddCar>,
      },
      {
        path: "/browsecars",
        element: <BrowseCars></BrowseCars>,
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/updateBookings/:id",
        element: <UpdateBookings></UpdateBookings>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
