import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-12 gap-3 bg-[#3571fc13]">
                <div className="lg:col-span-2 animate__animated animate__fadeInLeft">
                    <SideBar />
                </div>

                <div className="col-span-12 lg:col-span-10 px-5 lg:px-12 py-16">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
