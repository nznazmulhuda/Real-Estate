import { Sidenav, Nav, ButtonToolbar } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import { useContext, useState } from "react";
import AdminIcon from "@rsuite/icons/Admin";
import GearIcon from "@rsuite/icons/Gear";
import OffIcon from "@rsuite/icons/Off";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Dropdown } from "rsuite";

function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState("1");
    const navigate = useNavigate();
    const { signOutUser } = useContext(AuthContext);

    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item
                icon={<DashboardIcon />}
                onClick={() => navigate("/dashboard")}
            >
                Dashboard
            </Dropdown.Item>

            <Dropdown.Item
                icon={<AdminIcon />}
                onClick={() => navigate("profile")}
            >
                Profile
            </Dropdown.Item>

            <Dropdown.Item
                icon={<GearIcon />}
                onClick={() => navigate("settings")}
            >
                Settings
            </Dropdown.Item>

            <Dropdown.Item
                icon={<OffIcon className={`text-red-500`} />}
                onClick={signOutUser}
            >
                Sign Out
            </Dropdown.Item>
        </Dropdown>
    );

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

            <div className="z-[9999] flex lg:hidden">
                <ButtonToolbar>
                    <CustomDropdown title="Menu" trigger="click" />
                </ButtonToolbar>
            </div>
        </>
    );
}

export default SideBar;
