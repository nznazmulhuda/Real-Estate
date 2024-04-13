import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function HomeCard({ homeCard }) {
    const {
        estate_title,
        segment_name,
        description,
        price,
        area,
        location,
        facilities,
        image_urls,
        status,
    } = homeCard;

    return (
        <>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card bg-base-100 shadow-xl mt-7 pt-4">
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
                        className="w-full md:w-[48vw] lg:w-[28vw] h-[70vh] md:h-[50vh] lg:h-[30vh] relative"
                    >
                        {image_urls.map((url) => (
                            <SwiperSlide key={url} title="Slide left">
                                <div className="w-full h-full rounded">
                                    <img
                                        className="w-full h-full rounded"
                                        src={url}
                                        alt={url}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        <h1 className="absolute top-5 left-5 font-bold text-white bg-blue-800 py-1 px-3 rounded-lg z-[9999]">
                            {status.toUpperCase()}
                        </h1>
                    </Swiper>

                    <div className="card-body">
                        <h2 className="text-xl md:text-2xl lg:text-3xl">
                            {estate_title}{" "}
                            <small className="text-blue-700 font-bold text-xs md:text-sm lg:text-lg">
                                {segment_name}
                            </small>
                        </h2>
                        <p>
                            {description.split(" ").slice(0, 12).join(" ")}...{" "}
                            <Link className="text-blue-500">Read more</Link>
                        </p>
                        <p>
                            <b>Price:</b> {price}
                        </p>
                        <p>
                            <b>Area:</b> {area}
                        </p>
                        <p>
                            <b>Location:</b> {location}
                        </p>
                        <div>
                            <b>Facilities:</b>
                            <ul className="pl-6 list-decimal">
                                {facilities.map((facilitie, id) => (
                                    <li key={id}>{facilitie}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <Link>
                                <button className="btn bg-blue-700 text-white hover:bg-blue-600 ">
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
