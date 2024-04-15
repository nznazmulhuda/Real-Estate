import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";

function Banner({ data }) {
    const {
        image_urls,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        bedrooms,
        bathrooms,
        floor_number,
        year_built,
        hoa_fees,
        school_district,
        listing_agent,
        contact_email,
        contact_phone,
        amenities,
        pet_policy,
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
                <div className="w-full h-[25vh] relative">
                    <img
                        className="w-full h-full opacity-80"
                        src={image_urls[1]}
                        alt=""
                    />

                    <div className="w-full h-[25vh] bg-gradient-to-b from-zinc-400 to-black absolute top-0 opacity-55"></div>

                    <div className="container top-0 absolute left-1/2 -translate-x-1/2 h-[25vh]">
                        <div className="flex flex-col justify-center h-full mt-10 space-y-5">
                            <div className="space-x-3">
                                <button className="btn btn-ghost text-white font-bold text-xl bg-[#3270FC] hover:bg-[#326ffcc3] font-lato">
                                    {status.toUpperCase()}
                                </button>

                                <button className="btn btn-ghost text-white font-bold text-xl bg-[#3270FC] hover:bg-[#326ffcc3] font-lato">
                                    {segment_name.toUpperCase()}
                                </button>
                            </div>

                            <h1 className="text-white text-4xl font-semibold font-josefin">
                                {estate_title}
                            </h1>

                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-2">
                                    <FaLocationDot className="text-[#3270FC] text-xl" />

                                    <button className="text-white font-semibold font-lato text-lg">
                                        {location}
                                    </button>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <FaStar className="text-yellow-500 text-xl" />

                                    <h1 className="text-white text-lg font-bold ">
                                        {rating}
                                    </h1>

                                    <h3 className="text-white ml-3">
                                        {ratingName}
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className="text-white font-bold text-xl">
                                        Price:{" "}
                                        <sup className="text-lg text-white font-bold ml-2">
                                            $
                                        </sup>{" "}
                                        <span className="text-[#5c8af5] font-josefin font-extrabold text-3xl">
                                            {price.split("$")[1]}
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <button className="btn absolute bottom-10 right-10 btn-ghost text-white font-bold text-xl hover:bg-[#3270FC] border border-blue-500 flex items-center">
                            <FaShareAlt /> Share
                        </button>
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
