import { Link, useLocation } from "react-router-dom";
import tri from "../../assets/tri.png";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Footer() {
    const { pathname } = useLocation();
    return (
        <>
            <div
                className={`bg-[#151b24] pt-[100px] ${
                    pathname === "/" ? "pt-[100px]" : "pt-[30px] mt-10"
                }`}
            >
                <footer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 container mx-auto mt-14 pb-12 text-center md:text-left lg:text-left">
                    <div>
                        <Link
                            to={"/"}
                            className="lg:text-2xl font-lato font-bold cursor-pointer text-[#144273]"
                        >
                            <span className="text-blue-600 font-extrabold text-2xl lg:text-4xl">
                                D
                            </span>
                            ream{" "}
                            <span className="text-blue-600 font-extrabold text-2xl lg:text-4xl">
                                D
                            </span>
                            wellings
                        </Link>

                        <p className="text-[#878C9F] text-sm font-lato leading-6 mt-4 mb-3 lg:w-[80%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate quae provident architecto ad porro
                            recusandae facere, eius amet sint perferendis?
                        </p>

                        <p className="text-[#144273] text-sm font-medium font-lato mb-2">
                            Monday - Friday:{" "}
                            <span className="text-[#3270FC]">8am - 6pm</span>
                        </p>

                        <p className="text-[#144273] text-sm font-medium font-lato">
                            Saturday - Sunday:{" "}
                            <span className="text-[#3270FC]">9am - 3pm</span>
                        </p>
                    </div>

                    <div className="text-[#566985] font-semibold text-lg font-lato">
                        <h1 className="text-xl">Helpful links</h1>

                        <ul className="mt-5 flex flex-col pl-10 md:pl-0 lg:pl-0">
                            <li className="flex items-center gap-4">
                                <img src={tri} alt="" />
                                <Link
                                    to={"/"}
                                    className="text-[#144273] font-semibold font-lato text-sm"
                                >
                                    About Our Company
                                </Link>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={tri} alt="" />
                                <Link
                                    to={"/"}
                                    className="text-[#144273] font-semibold font-lato text-sm"
                                >
                                    Our last News
                                </Link>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={tri} alt="" />
                                <Link
                                    to={"/"}
                                    className="text-[#144273] font-semibold font-lato text-sm"
                                >
                                    Pricing Plans
                                </Link>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={tri} alt="" />
                                <Link
                                    to={"/"}
                                    className="text-[#144273] font-semibold font-lato text-sm"
                                >
                                    Contacts
                                </Link>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={tri} alt="" />
                                <Link
                                    to={"/"}
                                    className="text-[#144273] font-semibold font-lato text-sm"
                                >
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-[#566985] font-semibold text-lg font-lato">
                        <h1 className="text-xl">Contacts Info</h1>

                        <div className="flex items-center gap-2 mt-5 pl-10 md:pl-0 lg:pl-0">
                            <IoMailOutline className="text-[#3270FC] text-sm" />

                            <h1 className="text-[#7D93B2] font-lato text-sm font-semibold mt-2">
                                Mail :
                            </h1>

                            <h2 className="text-[#144273] font-lato text-sm font-semibold ml-8">
                                yourmail@domain.com
                            </h2>
                        </div>

                        <div className="flex items-center gap-2 pl-10 md:pl-0 lg:pl-0">
                            <CiLocationOn className="text-[#3270FC] text-sm" />

                            <h1 className="text-[#7D93B2] font-lato text-sm font-semibold mt-2">
                                Adress :
                            </h1>

                            <h2 className="text-[#144273] font-lato text-sm font-semibold ml-4">
                                USA 27TH Brooklyn NY
                            </h2>
                        </div>

                        <div className="flex items-center gap-2 pl-10 md:pl-0 lg:pl-0">
                            <FiPhone className="text-[#3270FC] text-sm" />

                            <h1 className="text-[#7D93B2] font-lato text-sm font-semibold mt-2">
                                Phone :
                            </h1>

                            <h2 className="text-[#144273] font-lato text-sm font-semibold ml-5">
                                +7(111)123456789
                            </h2>
                        </div>
                    </div>

                    <div className="text-[#566985] font-semibold text-lg font-lato">
                        <h1 className="text-xl">Download our APP</h1>

                        <p className="text-[#878C9F] text-sm leading-6 mt-3 mb-4">
                            Start working with Dream Dwellings that can provide
                            everything you need.
                        </p>

                        <button className="bg-[#3270FC] hover:bg-[#326ffcd7] text-white flex items-center justify-center gap-3 py-4 w-full rounded-lg mb-3">
                            <FaApple className="text-2xl" />
                            <h1 className="text-xl">App Store</h1>
                        </button>

                        <button className="bg-[#3270FC] hover:bg-[#326ffcd7] text-white flex items-center justify-center gap-3 py-4 w-full rounded-lg">
                            <FaGooglePlay className="text-2xl" />
                            <h1 className="text-xl"> Play Store</h1>
                        </button>
                    </div>
                </footer>

                <div className="divider bg-gray-600 h-1 container mx-auto mt-0"></div>
                <p className="text-[#878C9F] text-center pb-3">
                    Copyright © 2024 - All right reserved by Dream Dwellings.
                </p>
            </div>
        </>
    );
}

export default Footer;
