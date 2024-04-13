import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { About, Blog, Contact, Home, Login, Register } from "../Pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("./ResidentialsData.json"),
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
        ],
    },
]);
