import { Link, NavLink, useLocation } from "react-router-dom";
import "../../../node_modules/animate.css/";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { VscSignOut } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import Person from "../../assets/Icon.png";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import "animate.css";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Button } from "rsuite";

function Navbar() {
    let { pathname } = useLocation();
    const { user, signOutUser } = useContext(AuthContext);
    const [responsive, setResponsive] = useState(false);
    const [resSearch, setResSearch] = useState(false);

    const links = (
        <>
            <button className="animate__animated animate__fadeInLeft">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                            : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                    }
                >
                    Home
                </NavLink>
            </button>

            {user ? (
                <button className="animate__animated animate__fadeInLeft">
                    <NavLink
                        to={"/dashboard/settings"}
                        className={({ isActive }) =>
                            isActive
                                ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                                : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                        }
                    >
                        Update Profile
                    </NavLink>
                </button>
            ) : null}

            {user ? (
                <button className="animate__animated animate__fadeInLeft">
                    <NavLink
                        to={"/dashboard/profile"}
                        className={({ isActive }) =>
                            isActive
                                ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                                : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                        }
                    >
                        User Profile
                    </NavLink>
                </button>
            ) : null}
        </>
    );

    const resLinks = (
        <>
            <button className="animate__animated animate__fadeInLeft">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                            : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                    }
                >
                    Home
                </NavLink>
            </button>

            {user ? (
                <button className="animate__animated animate__fadeInLeft">
                    <NavLink
                        to={"/dashboard/settings"}
                        className={({ isActive }) =>
                            isActive
                                ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                                : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                        }
                    >
                        Update Profile
                    </NavLink>
                </button>
            ) : null}

            {user ? (
                <button className="animate__animated animate__fadeInLeft">
                    <NavLink
                        to={"/dashboard/profile"}
                        className={({ isActive }) =>
                            isActive
                                ? `text-[#3270FC] font-lato font-medium leading-6 text-sm`
                                : `text-[#144273] font-lato text-sm font-medium leading-6 hover:text-[#3270FC]`
                        }
                    >
                        User Profile
                    </NavLink>
                </button>
            ) : null}
            <div className="divider my-0"></div>
            {!user ? (
                <Button
                    appearance="primary"
                    className="w-full btn btn-ghost text-lg font-bold font-josefin"
                    onClick={signOutUser}
                >
                    <AiOutlinePoweroff /> Sign In
                </Button>
            ) : null}
        </>
    );

    return (
        <>
            <div className="sticky top-0 z-[9999999999] bg-white">
                <nav className="flex justify-between items-center container mx-auto top-0 border-b py-2">
                    {/* left side */}
                    <div className="flex items-center gap-0 md:gap-7 lg:gap-14 w-1/2">
                        {/* Logo */}
                        <div className="animate__animated animate__fadeInLeft">
                            <Link
                                to={"/"}
                                className="lg:text-2xl font-lato font-bold cursor-pointer focus:no-underline hover:no-underline"
                            >
                                <span className="text-blue-600 font-extrabold lg:text-4xl">
                                    D
                                </span>
                                ream{" "}
                                <span className="text-blue-600 font-extrabold lg:text-4xl">
                                    D
                                </span>
                                wellings
                            </Link>
                        </div>

                        {/* Search bar */}
                        <div className="hidden md:flex lg:flex items-center justify-center gap-2 md:gap-3 lg:gap-4 bg-[#F5F7FB] rounded-[40px] border md:w-[35%] lg:w-[25%] animate__animated animate__fadeInLeft">
                            <FaSearch className="text-[#3270FC]" />

                            <input
                                type="text"
                                placeholder="Search..."
                                className="text-[#144273] font-lato text-sm leading-8 md:leading-9 lg:leading-10 font-medium outline-none bg-transparent border-nonef placeholder:text-[#144273] placeholder:font-medium placeholder:leading-10 w-[30%] md:w-[40%] lg:w-[50%]"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center divide-x w-1/2 justify-end">
                        {/* Links */}
                        <div className="items-center gap-5 pr-10 hidden md:hidden lg:flex animate__animated animate__fadeInLeft">
                            {links}
                        </div>

                        {/* Login & Log In */}
                        <div className="px-3 md:px-3 lg:px-6 animate__animated animate__fadeInLeft">
                            {!user ? (
                                <div className="flex items-center gap-3">
                                    <img
                                        src={Person}
                                        alt=""
                                        className="hidden md:hidden lg:flex"
                                    />
                                    <Link to={"/login"} state={pathname}>
                                        <button className="text-[#144273] font-lato font-semibold leading-[40px] mt-1 hidden md:hidden lg:flex">
                                            Log In
                                        </button>
                                    </Link>

                                    <Link to={"/login"} state={pathname}>
                                        <button className="flex md:flex lg:hidden ">
                                            <BsPerson className="text-[#3270FC] text-2xl" />
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <div
                                    className={`w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14 border lg:p-2 rounded-full dropdown dropdown-hover dropdown-bottom dropdown-end`}
                                >
                                    <img
                                        className="rounded-full w-full h-full"
                                        src={user.photoURL}
                                        alt=""
                                    />

                                    <div
                                        tabIndex={0}
                                        className="dropdown-content z-[99999] menu p-2 shadow bg-base-100 rounded-box w-52 hidden lg:flex"
                                    >
                                        <li>
                                            <p className="text-[#1b3571] text-sm font-semibold text-center">
                                                Welcome,{" "}
                                                <span className="text-[#3570FC] font-bold">
                                                    {user.displayName}
                                                </span>
                                            </p>
                                        </li>

                                        <div className="divider my-0"></div>

                                        <li>
                                            <Link
                                                to={"/dashboard/profile"}
                                                className="text-[#1b3571] text-sm font-semibold w-full hover:no-underline"
                                            >
                                                <BsPerson />
                                                Profile
                                            </Link>
                                        </li>

                                        <div className="divider my-0"></div>

                                        <li className="flex items-center gap-1">
                                            <Link
                                                to={"/dashboard/settings"}
                                                className="text-[#1b3571] text-sm font-semibold w-full hover:no-underline"
                                            >
                                                <CiSettings /> Settings
                                            </Link>
                                        </li>

                                        <div className="divider my-0"></div>

                                        <li>
                                            <Button
                                                appearance="primary"
                                                className="w-full btn btn-ghost text-lg font-bold font-josefin"
                                                onClick={signOutUser}
                                            >
                                                <AiOutlinePoweroff /> Sign out
                                            </Button>
                                        </li>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dashboard */}
                        {user ? (
                            <div className="pl-3 md:pl-3 lg:pl-6 hidden md:hidden lg:flex animate__animated animate__fadeInLeft">
                                <Link
                                    to={"/dashboard"}
                                    className="flex items-center gap-3 bg-[#3270FC] rounded px-5 py-3 hover:bg-[#326ffce7] focus:no-underline hover:no-underline"
                                >
                                    {" "}
                                    <FaArrowTrendUp className="text-white" />
                                    <h1 className="text-white font-lato text-sm font-semibold">
                                        Dashboard
                                    </h1>
                                </Link>
                            </div>
                        ) : null}

                        {/* responsive search icon */}
                        <div className="animate__animated animate__fadeInLeft px-3 flex md:hidden lg:hidden">
                            <FaSearch
                                className={`text-[#3270FC] text-lg h-5 animate__animated ${
                                    resSearch
                                        ? "animate__fadeOutDown absolute"
                                        : "flex animate__fadeInUp"
                                }`}
                                onClick={() => setResSearch(!resSearch)}
                            />

                            <div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className={`text-[#144273] font-lato text-sm leading-8 md:leading-9 lg:leading-10 font-medium outline-none bg-transparent border-nonef placeholder:text-[#144273] placeholder:font-medium placeholder:leading-10 w-[100%] h-5 ${
                                        resSearch ? "flex" : "hidden"
                                    } animate__animated animate__fadeInDown`}
                                    onBlur={() => setResSearch(false)}
                                />
                            </div>
                        </div>

                        {/* Menu bar */}
                        <div className="px-3 flex md:flex lg:hidden animate__animated animate__fadeInLeft">
                            <button className="bg-[#3270FC] text-white py-1 px-1 rounded-md">
                                {responsive ? (
                                    <RxCross2
                                        onClick={() => setResponsive(false)}
                                    />
                                ) : (
                                    <IoIosMenu
                                        onClick={() => setResponsive(true)}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Responsive tablet */}
                    <div
                        className={`absolute right-0 top-14  bg-white rounded-lg p-4 flex-col animate__animated w-80 ${
                            responsive ? "flex" : "hidden"
                        } `}
                        onBlur={() => setResponsive(false)}
                    >
                        <div className="flex flex-col items-start justify-start p-5 pb-0">
                            {resLinks}
                        </div>

                        <div className="divider my-0"></div>

                        {user ? (
                            <>
                                <Link
                                    to={"/dashboard/profile"}
                                    className="w-full btn btn-primary text-lg font-bold font-josefin"
                                >
                                    Profile <CgProfile />
                                </Link>

                                <button
                                    onClick={() => signOutUser}
                                    className="w-full btn btn-ghost text-lg font-bold font-josefin"
                                >
                                    Sign Out <VscSignOut />
                                </button>
                            </>
                        ) : null}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
