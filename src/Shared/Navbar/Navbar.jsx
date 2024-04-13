import { Link, NavLink, useLocation } from "react-router-dom";
import "../../../node_modules/animate.css/";
function Navbar() {
    let { pathname } = useLocation();

    const links = (
        <>
            <button>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? `bg-blue-700 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap border border-blue-700 rounded-md shadow-sm hover:bg-blue-600`
                            : `inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap  border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 hover:text-white`
                    }
                >
                    Home
                </NavLink>
            </button>

            <button>
                <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                        isActive
                            ? `bg-blue-700 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap border border-blue-700 rounded-md shadow-sm hover:bg-blue-600`
                            : `inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap  border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 hover:text-white`
                    }
                >
                    Blog
                </NavLink>
            </button>

            <button>
                <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                        isActive
                            ? `bg-blue-700 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap border border-blue-700 rounded-md shadow-sm hover:bg-blue-600`
                            : `inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap  border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 hover:text-white`
                    }
                >
                    About
                </NavLink>
            </button>

            <button>
                <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                        isActive
                            ? `bg-blue-700 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap border border-blue-700 rounded-md shadow-sm hover:bg-blue-600`
                            : `inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap  border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 hover:text-white`
                    }
                >
                    Contact
                </NavLink>
            </button>
        </>
    );

    return (
        <>
            <nav className="flex justify-center lg:justify-between container mx-auto mt-8 items-center flex-col lg:flex-row gap-5 animate__animated animate__fadeInUp sticky top-5">
                <div className="flex gap-5">
                    <Link
                        to={"/"}
                        className="text-2xl font-lato font-bold cursor-pointer"
                    >
                        <span className="text-blue-600 font-extrabold text-4xl">
                            D
                        </span>
                        ream{" "}
                        <span className="text-blue-600 font-extrabold text-4xl">
                            D
                        </span>
                        wellings
                    </Link>

                    <div className="flex md:flex lg:hidden">
                        {pathname === "/login" ? (
                            <Link
                                to={"/register"}
                                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border border-blue-700 rounded-lg shadow-md group"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                                    Register
                                </span>
                                <span className="relative invisible">
                                    Register
                                </span>
                            </Link>
                        ) : (
                            <Link
                                to={"/login"}
                                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border border-blue-700 rounded-lg shadow-md group"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                                    Login
                                </span>
                                <span className="relative invisible">
                                    login
                                </span>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="flex gap-4 flex-wrap justify-center">
                    {links}
                </div>

                <div className="hidden md:hidden lg:flex">
                    {pathname === "/login" ? (
                        <Link
                            to={"/register"}
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border border-blue-700 rounded-lg shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                                Register
                            </span>
                            <span className="relative invisible">Register</span>
                        </Link>
                    ) : (
                        <Link
                            to={"/login"}
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border border-blue-700 rounded-lg shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                                Login
                            </span>
                            <span className="relative invisible">login</span>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
