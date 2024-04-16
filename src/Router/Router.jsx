import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
    Dashboard,
    Details,
    Home,
    Login,
    Profile,
    ProfileEdit,
    Register,
} from "../Pages";
import PrivateRoute from "./PrivateRoute";
import Dash from "../Pages/Dashboard/Dash";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/details/:id/:title",
                element: (
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>
                ),
                loader: () => fetch("/ResidentialsData.json"),
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "/dashboard",
                        element: (
                            <PrivateRoute>
                                <Dash />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "profile",
                        element: (
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "settings",
                        element: (
                            <PrivateRoute>
                                <ProfileEdit />
                            </PrivateRoute>
                        ),
                    },
                ],
            },
        ],
    },
]);
