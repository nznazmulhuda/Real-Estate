import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { About, Blog, Contact, Details, Home, Login, Register } from "../Pages";
import PrivateRoute from "./PrivateRoute";

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
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
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
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <div>Profie</div>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
