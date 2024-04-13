import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-base-200 rounded-lg mt-10">
                <footer className="footer container mx-auto pt-12 pb-6 text-neutral-content">
                    <aside>
                        <Link
                            to={"/"}
                            className="text-2xl font-lato font-bold cursor-pointer text-black"
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
                        <p className="text-gray-500 ">
                            Explore. Discover. Connect. Your journey to the{" "}
                            <br />npm i react-dynamic-title
                            perfect home begins here
                        </p>
                    </aside>

                    <nav>
                        <h6 className="footer-title text-black">
                            <b>Social</b>
                        </h6>
                        <div className="grid grid-flow-col gap-4">
                            <a className="cursor-pointer">
                                <FaFacebook className="text-black text-2xl" />
                            </a>
                            <a className="cursor-pointer">
                                <FaTwitter className="text-black text-2xl" />
                            </a>
                            <a className="cursor-pointer">
                                <FaInstagramSquare className="text-black text-2xl" />
                            </a>
                        </div>
                    </nav>
                </footer>

                <div className="divider my-0"></div>

                <footer className="footer footer-center p-4 text-base-content">
                    <aside>
                        <p>
                            Copyright © 2024 - All right reserved by Dream
                            Dwellings.
                        </p>
                    </aside>
                </footer>
            </div>
        </>
    );
}

export default Footer;
