import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdGitCompare } from "react-icons/io";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Area from "../../../assets/area.png";
import Bed from "../../../assets/bed.png";
import Bath from "../../../assets/bath.png";

AOS.init();

function HomeCard({ homeCard }) {
    const {
        estate_title,
        segment_name,
        description,
        price,
        area,
        location,
        bedrooms,
        bathrooms,
        image_urls,
        status,
        id,
    } = homeCard;
    const [hov, setHov] = useState(false);

    return (
        <>
            <div data-aos="flip-down" className="overflow-hidden">
                <div
                    className="card shadow-2xl mt-7 pt-4 overflow-hidden rounded-xl bg-transparent"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="w-full md:w-[48vw] lg:w-[28vw] h-[70vh] md:h-[50vh] lg:h-[30vh] relative overflow-hidden"
                        onMouseEnter={() => setHov(true)}
                        onMouseLeave={() => setHov(false)}
                    >
                        {image_urls.map((url) => (
                            <SwiperSlide key={url} title="Slide left">
                                <div className="w-full h-full rounded-xl bg-black">
                                    <img
                                        className={`w-full h-full rounded-xl overflow-hidden cursor-pointer ${
                                            hov ? "opacity-70" : "opacity-100"
                                        } transition-all ease-in`}
                                        src={url}
                                        alt={url}
                                        onMouseEnter={() => setHov(true)}
                                        onMouseLeave={() => setHov(false)}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        <div
                            className="absolute top-10 z-[9999] left-5 flex gap-5 overflow-hidden"
                            onMouseEnter={() => setHov(true)}
                            onMouseLeave={() => setHov(false)}
                        >
                            <h1
                                className="font-bold text-white bg-[#3270FC] py-2 px-5 rounded-lg cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                onMouseEnter={() => setHov(true)}
                                onMouseLeave={() => setHov(false)}
                            >
                                {status.toUpperCase()}
                            </h1>

                            <h1
                                className="font-bold text-white bg-[#3270FC] py-2 px-5 rounded-lg cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                onMouseEnter={() => setHov(true)}
                                onMouseLeave={() => setHov(false)}
                            >
                                {segment_name.toUpperCase()}
                            </h1>
                        </div>

                        <div
                            className="absolute top-10 z-[9999] right-10 flex w-48 items-end flex-col gap-5 overflow-hidden"
                            onMouseEnter={() => setHov(true)}
                            onMouseLeave={() => setHov(false)}
                        >
                            <div
                                className="bg-gray-200 w-9 h-9 rounded relative tooltip tooltip-left"
                                data-tip="Save"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                onMouseEnter={() => setHov(true)}
                                onMouseLeave={() => setHov(false)}
                            >
                                <BiSave className="cursor-pointer hover:text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl" />
                            </div>

                            <div
                                className="bg-gray-200 w-9 h-9 rounded relative tooltip tooltip-left"
                                data-tip="Compare"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                onMouseEnter={() => setHov(true)}
                                onMouseLeave={() => setHov(false)}
                            >
                                <IoMdGitCompare className="cursor-pointer hover:text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl" />
                            </div>
                        </div>

                        <div
                            className="absolute bottom-5 z-[9999] left-5 flex items-center gap-2 overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            onMouseEnter={() => setHov(true)}
                            onMouseLeave={() => setHov(false)}
                        >
                            <FaLocationDot className="text-blue-500 text-lg" />
                            <h1 className="text-white font-bold text-lg font-lato">
                                {location}
                            </h1>
                        </div>
                    </Swiper>

                    <div
                        className="card-body overflow-hidden w-full"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <Link
                            to={`/details/${id}/${estate_title
                                .split(" ")
                                .join("+")}`}
                            className="text-xl text-[#757B8D] hover:text-black md:text-2xl lg:text-3xl"
                        >
                            {estate_title}
                        </Link>

                        <p
                            className="text-[#3270FC] text-xl font-bold font-josefin"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            {price}
                        </p>

                        <p
                            className="text-[#878C9F] text-sm leading-6 font-lato w-[70%]"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            {description.split(" ").slice(0, 12).join(" ")}...
                        </p>

                        <div className="flex gap-5 items-center">
                            <div
                                className="flex items-end gap-2"
                                data-aos="fade-left"
                                data-aos-delay="700"
                            >
                                <div>
                                    <img src={Bed} alt="" />
                                </div>
                                <p className="text-[#333333] font-semibold text-sm font-lato">
                                    {bedrooms}
                                </p>
                            </div>

                            <div
                                className="flex items-end gap-2"
                                data-aos="fade-right"
                                data-aos-delay="800"
                            >
                                <div>
                                    <img src={Bath} alt="" />
                                </div>
                                <p className="text-[#333333] font-semibold text-sm font-lato">
                                    {bathrooms}
                                </p>
                            </div>

                            <div
                                className="flex items-end gap-2"
                                data-aos="fade-right"
                                data-aos-delay="900"
                            >
                                <div>
                                    <img src={Area} alt="" />
                                </div>
                                <p className="text-[#333333] font-semibold text-sm font-lato">
                                    {area}
                                </p>
                            </div>
                        </div>

                        <div className="divider my-0"></div>

                        <div
                            className="card-actions w-full"
                            data-aos="fade-right"
                            data-aos-delay="1000"
                        >
                            <Link
                                to={`/details/${id}/${estate_title
                                    .split(" ")
                                    .join("+")}`}
                                className="w-full"
                            >
                                <button className="btn w-full bg-blue-700 text-white text-xl hover:bg-blue-600 ">
                                    View Property
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

HomeCard.propTypes = {
    homeCard: PropTypes.object,
};

export default HomeCard;
