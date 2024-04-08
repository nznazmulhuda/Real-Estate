import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared";

function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default Layout;
