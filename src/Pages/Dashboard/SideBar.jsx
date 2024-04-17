import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import { useContext, useState } from "react";
import AdminIcon from "@rsuite/icons/Admin";
import GearIcon from "@rsuite/icons/Gear";
import OffIcon from "@rsuite/icons/Off";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState("1");
    const navigate = useNavigate();
    const { signOutUser } = useContext(AuthContext);

    return (
        <>
            <div className="sticky lg:top-20 -mt-2 hidden lg:flex">
                <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item
                                eventKey="1"
                                icon={<DashboardIcon />}
                                onClick={() => navigate("/dashboard")}
                            >
                                Dashboard
                            </Nav.Item>

                            <Nav.Item
                                eventKey="2"
                                icon={<AdminIcon />}
                                onClick={() => navigate("profile")}
                            >
                                Profile
                            </Nav.Item>

                            <Nav.Item
                                eventKey="3"
                                icon={<GearIcon />}
                                onClick={() => navigate("settings")}
                            >
                                Settings
                            </Nav.Item>

                            <hr className="my-0 mb-3" />

                            <Nav.Item
                                eventKey="4"
                                icon={
                                    <OffIcon
                                        className={`${
                                            !expanded && "text-red-500"
                                        }`}
                                    />
                                }
                                style={{
                                    background: "#3570FC",
                                    color: "white",
                                    fontWeight: "500",
                                }}
                                onClick={signOutUser}
                            >
                                Sign Out
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle
                        aria-expanded={expanded}
                        onToggle={(expanded) => setExpanded(expanded)}
                        className="hidden lg:flex"
                    />
                </Sidenav>
            </div>
        </>
    );
}

export default SideBar;
