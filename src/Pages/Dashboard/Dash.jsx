import Top from "./Top";
import { TbChecklist } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Statistics from "./Statistics";
import useTitle from "react-dynamic-title";

function Dash() {
    useTitle("Dashboard");
    return (
        <>
            <Top title={"Dashboard"} />

            <div className="grid lg:grid-cols-4 gap-0 lg:gap-10">
                <div className="flex items-center justify-between rounded-lg border p-5 bg-white">
                    <div>
                        <h5 className="text-[#1b397f]">Active Listings</h5>
                        <h2 className="text-[#3570FC]">124</h2>
                    </div>

                    <div className="w-16 h-16 bg-[#3570FC] flex items-center justify-center rounded-xl shadow-xl">
                        <TbChecklist className="text-white text-3xl" />
                    </div>
                </div>

                <div className="flex items-center justify-between border rounded-lg p-5 bg-white">
                    <div>
                        <h5 className="text-[#1b397f]">Listing Views</h5>
                        <h2 className="text-[#3570FC]">
                            1056
                            <span className="text-sm text-gray-400">
                                ( <span className="text-green-400">+356</span>{" "}
                                this week)
                            </span>
                        </h2>
                    </div>

                    <div className="w-16 h-16 bg-[#3570FC] flex items-center justify-center rounded-xl shadow-xl">
                        <FaRegChartBar className="text-white text-3xl" />
                    </div>
                </div>

                <div className="flex items-center justify-between border rounded-lg p-5 bg-white">
                    <div>
                        <h5 className="text-[#1b397f]">Your Reviews</h5>
                        <h2 className="text-[#3570FC]">
                            357
                            <span className="text-sm text-gray-400">
                                ( <span className="text-green-400">+12</span>{" "}
                                this week)
                            </span>
                        </h2>
                    </div>

                    <div className="w-16 h-16 bg-[#3570FC] flex items-center justify-center rounded-xl shadow-xl">
                        <IoChatbubblesOutline className="text-white text-3xl" />
                    </div>
                </div>

                <div className="flex items-center justify-between border rounded-lg p-5 bg-white">
                    <div>
                        <h5 className="text-[#1b397f]">Times Bookmarked</h5>
                        <h2 className="text-[#3570FC]">
                            2329
                            <span className="text-sm text-gray-400">
                                ( <span className="text-green-400">+234</span>{" "}
                                this week)
                            </span>
                        </h2>
                    </div>

                    <div className="w-16 h-16 bg-[#3570FC] flex items-center justify-center rounded-xl shadow-xl">
                        <FaRegHeart className="text-white text-3xl" />
                    </div>
                </div>
            </div>

            <div>
                <Statistics />
            </div>
        </>
    );
}

export default Dash;
