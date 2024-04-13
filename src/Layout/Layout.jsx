import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Shared";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
