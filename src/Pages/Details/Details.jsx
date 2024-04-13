import useTitle from "react-dynamic-title";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Details() {
    const { title, id } = useParams();
    useTitle(title.split("+").join(" "));
    let datas = useLoaderData();
    datas = datas.filter((data) => data.id === id * 1);

    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image_urls,
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
    } = datas[0];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 container mx-auto p-5">
                <div className="w-full]">
                    <div className="overflow-hidden w-full">
                        <div
                            className="card bg-base-100 shadow-xl mt-7 pt-4 overflow-hidden w-full"
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
                                className="w-full h-[90vh] md:h-[70vh] lg:h-[50vh] relative overflow-hidden"
                            >
                                {image_urls.map((url) => (
                                    <SwiperSlide key={url} title="Slide left">
                                        <div className="w-full h-full rounded">
                                            <img
                                                className="w-full h-full rounded overflow-hidden"
                                                src={url}
                                                alt={url}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}

                                <h1
                                    className="absolute top-5 left-5 font-bold text-white bg-blue-800 py-1 px-3 rounded-lg z-[9999] overflow-hidden"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    {status.toUpperCase()}
                                </h1>
                            </Swiper>

                            <div
                                className="card-body overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <h2 className="text-xl md:text-2xl lg:text-3xl">
                                    {estate_title}{" "}
                                    <small className="text-blue-700 font-bold text-xs md:text-sm lg:text-lg">
                                        {segment_name}
                                    </small>
                                </h2>

                                <p data-aos="fade-up" data-aos-delay="400">
                                    {description}
                                </p>

                                <div className="mt-4">
                                    {/* Price Section */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-5s">
                                            <b>Price:</b> {price}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-7s">
                                            <b>HOA Fees:</b>{" "}
                                            {hoa_fees
                                                ? hoa_fees
                                                : "Contact Us!"}
                                        </p>
                                    </div>

                                    {/* Area Section */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-9s">
                                            <b>Area:</b> {area}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-11s">
                                            <b>Location:</b> {location}
                                        </p>
                                    </div>

                                    {/* Room's Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-13s">
                                            <b>Bedrooms:</b> {bedrooms}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-15s">
                                            <b>Bathrooms:</b> {bathrooms}
                                        </p>
                                    </div>

                                    {/* Room Category */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-17s">
                                            <b>Floor Number:</b>{" "}
                                            {floor_number
                                                ? floor_number
                                                : "Contact Us"}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-19s">
                                            <b>Pet Policy:</b>{" "}
                                            {pet_policy
                                                ? pet_policy
                                                : "Pets are not allowed."}
                                        </p>
                                    </div>

                                    {/* Built and Segment */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-21s">
                                            <b>Built Year:</b>{" "}
                                            {year_built
                                                ? year_built
                                                : "Contact Us"}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-23s">
                                            <b>School District:</b>{" "}
                                            {school_district
                                                ? school_district
                                                : "Contact Us"}
                                        </p>
                                    </div>

                                    {/* Facilities Section */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-1">
                                        <div className="animate__animated animate__fadeInUp animate__delay-25s">
                                            <b>Facilities:</b>
                                            <ul className="pl-6 list-decimal animate__animated animate__fadeInUp animate__delay-25.5s">
                                                {facilities.map(
                                                    (facilitie, id) => (
                                                        <li key={id}>
                                                            {facilitie}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>

                                        <div className="animate__animated animate__fadeInUp animate__delay-27s">
                                            <b>Amenities:</b>
                                            <ul className="pl-6 list-decimal animate__animated animate__fadeInUp animate__delay-27.5s">
                                                {amenities
                                                    ? amenities.map(
                                                          (amenitie, id) => (
                                                              <li key={id}>
                                                                  {amenitie}
                                                              </li>
                                                          ),
                                                      )
                                                    : "Contact us"}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Listing Agent */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-1">
                                        <p className="animate__animated animate__fadeInUp animate__delay-29s">
                                            <b>Listing Agent:</b>{" "}
                                            {listing_agent
                                                ? listing_agent
                                                : "Contact Us"}
                                        </p>

                                        <p className="animate__animated animate__fadeInUp animate__delay-31s">
                                            <b>Contact:</b>{" "}
                                            {contact_email
                                                ? contact_email
                                                : null}
                                            ,{" "}
                                            {contact_phone
                                                ? contact_phone
                                                : null}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </>
    );
}

export default Details;
