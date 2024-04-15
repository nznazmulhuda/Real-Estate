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
import Banner from "./Banner";
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
            <div>
                <Banner data={datas[0]} />
            </div>
        </>
    );
}

export default Details;
