import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "rsuite";

function Banner({ data }) {
    const {
        image_urls,
        estate_title,
        segment_name,
        price,
        status,
        location,
        rating,
    } = data;

    const [ratingName, setRatingName] = useState("");
    useEffect(() => {
        if (rating <= 1) {
            setRatingName("Poor");
        } else if (rating <= 2 && rating > 1) {
            setRatingName("Average");
        } else if (rating <= 3 && rating > 2) {
            setRatingName("Good");
        } else if (rating <= 4 && rating > 3) {
            setRatingName("Very Good");
        } else if (rating <= 5 && rating > 4) {
            setRatingName("Excellent");
        }
    }, [rating]);

    return (
        <>
            <div>
                <div className="md:w-full lg:w-full h-[50vh] md:h-[45vh] lg:h-[50vh] relative">
                    <img
                        className="w-full h-full opacity-80"
                        src={image_urls[1]}
                        alt=""
                    />

                    <div className="w-full h-[50vh] md:h-[45vh] lg:h-[50vh] bg-gradient-to-b from-zinc-400 to-black absolute top-0 opacity-55"></div>

                    <div className="container top-0 absolute left-1/2 -translate-x-1/2 h-[50vh] md:h-[45vh] lg:h-[50vh]">
                        <div className="flex flex-col justify-center h-full lg:mt-10 space-y-1 md:space-y-2 lg:space-y-5">
                            <div className="space-x-3">
                                <Button
                                    appearance="primary"
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <p className="text-xs md:text-sm lg:text-lg">
                                        {status.toUpperCase()}
                                    </p>
                                </Button>

                                <Button
                                    appearance="ghost"
                                    style={{ color: "white" }}
                                    data-aos="fade-right"
                                    data-aos-offset="500"
                                    data-aos-easing="ease-in-sine"
                                >
                                    {segment_name.toUpperCase()}
                                </Button>
                            </div>

                            <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold font-josefin animate__animated animate__fadeInUp animate__delay-1s">
                                {estate_title}
                            </h1>

                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-2 animate__animated animate__fadeInLeft">
                                    <FaLocationDot className="text-[#3270FC] text-xl" />

                                    <button className="text-white font-semibold font-lato text-xs md:text-sm lg:text-lg">
                                        {location}
                                    </button>
                                </div>

                                <div className="flex gap-2 items-center animate__animated animate__fadeInLeft">
                                    <FaStar className="text-yellow-500 text-sm md:text-lg lg:text-xl" />

                                    <h1 className="text-white text-xs md:text-sm lg:text-lg font-bold ">
                                        {rating}
                                    </h1>

                                    <h3 className="text-white text-sm md:text-lg lg:text-xl ml-3">
                                        {ratingName}
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-sm md:text-lg lg:text-xl animate__animated animate__fadeInLeft">
                                    Price:{" "}
                                    <sup className="text-xs md:text-sm lg:text-lg text-white font-bold ml-2">
                                        $
                                    </sup>{" "}
                                    <span className="text-[#5c8af5] font-josefin font-extrabold text-xl md:text-2xl lg:text-3xl">
                                        {price.split("$")[1]}
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <div className="animate__animated animate__fadeInRight absolute bottom-5 right-0">
                            <Button
                                appearance="ghost"
                                style={{
                                    color: "white",
                                }}
                            >
                                <FaShareAlt /> Share
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Banner.propTypes = {
    data: PropTypes.object,
};

export default Banner;
