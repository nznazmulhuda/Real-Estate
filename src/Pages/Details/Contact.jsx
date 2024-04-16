import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegFilePdf, FaDownload } from "react-icons/fa";

export function Download({ text, className }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`flex items-center justify-between cursor-pointer ${
                    className && className
                }`}
            >
                <div className="flex items-center">
                    <FaRegFilePdf className="text-[#3570FC] text-3xl mr-4" />

                    <p className="text-[#1b387d] font-bold font-lato text-xl">
                        {text}
                    </p>
                </div>
                <FaDownload
                    className={`text-xl ${
                        isHover ? "text-[#3570FC]" : "text-gray-500"
                    }`}
                />
            </div>
        </>
    );
}

function Contact() {
    return (
        <>
            <div className="border p-7 rounded-xl shadow-lg ">
                <h1 className="text-3xl font-bold font-lato text-[#1b3980] mb-5">
                    Property Documents
                </h1>

                <div className=" px-8 py-10 space-y-4 bg-[#3571fc11] rounded-lg shadow-lg">
                    <Download text={"Property Presentation"} />

                    <div className="divider"></div>

                    <Download text={"Energetic Certificate"} />

                    <div className="divider"></div>

                    <Download text={"Property Plans"} />
                </div>
            </div>
        </>
    );
}

Download.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default Contact;
