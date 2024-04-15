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
import { IoHomeOutline } from "react-icons/io5";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { LiaInfoSolid } from "react-icons/lia";
import { GrLocationPin } from "react-icons/gr";
import { TiGroupOutline } from "react-icons/ti";
import { TbBed } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import Button from "./Button";
AOS.init();

function Details() {
    const { title, id } = useParams();
    useTitle(title.split("+").join(" "));
    let datas = useLoaderData();
    datas = datas.filter((data) => data.id === id * 1);

    const greating =
        "Welcome to your dream home! Nestled in a serene suburban neighborhood, this exquisite single-family residence offers an unparalleled living experience that combines luxury, comfort, and tranquility. Step through the grand double doors into a sprawling open-concept living space, flooded with natural light and adorned with elegant architectural details. The gourmet kitchen is a chef's paradise, featuring high-end appliances, custom cabinetry, and a spacious island perfect for culinary creations and entertaining guests. Retreat to the opulent master suite, boasting a lavish en-suite bathroom complete with a deep soaking tub, oversized shower, and dual vanities. Each additional bedroom is generously sized and appointed with luxurious finishes, providing ample space for family and guests. Outside, the meticulously landscaped grounds create a private oasis, offering lush greenery, a sparkling pool, and multiple seating areas for outdoor relaxation and enjoyment. Whether you're hosting gatherings in the expansive outdoor living space, unwinding in the cozy family room by the fireplace, or simply taking in the breathtaking views from the balcony, every moment spent in this magnificent home is sure to be unforgettable. With its prime location, impeccable craftsmanship, and unparalleled amenities, this is more than just a house – it's a place to call home.";

    const {
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
            <div className="">
                <div id="main">
                    <Banner data={datas[0]} />
                </div>

                <div className="grid grid-cols-12 container mx-auto gap-10 mt-10 relative">
                    <div className="col-span-1">
                        <div className="items-center py-4 rounded-xl sticky top-28 flex flex-col justify-center p-1 shadow-lg">
                            <Button toolTip={"Main"} sec={"#main"}>
                                <IoHomeOutline className="font-extrabold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </Button>

                            <div className="divider my-0 w-[60%] mx-auto"></div>

                            <Button toolTip={"Gallery"} sec={"#gallery"}>
                                <TbPhotoSquareRounded className="font-extrabold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </Button>

                            <div className="divider my-0 w-[60%] mx-auto"></div>

                            <Button toolTip={"Details"} sec={"#details"}>
                                <LiaInfoSolid className="font-extrabold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </Button>

                            <div className="divider my-0 w-[60%] mx-auto"></div>

                            <Button toolTip={"Location"} sec={"#location"}>
                                <GrLocationPin className="font-extrabold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-7">
                        <div id="gallery">
                            <div className="grid grid-cols-2 gap-3">
                                {image_urls.map((url) => (
                                    <div
                                        className="h-[30vh] rounded-xl shadow-lg border-2 border-zinc-500 p-2"
                                        key={url}
                                    >
                                        <div className="w-full h-full bg-black rounded-xl">
                                            <img
                                                className="w-full h-full hover:opacity-80 transition-all ease-in cursor-pointer rounded-xl"
                                                src={url}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-4 mt-5 border divide-x">
                                <div className="flex flex-col items-center gap-2 justify-center col-span-1 py-6 bg-slate-100">
                                    <IoHomeOutline className="text-[50px] text-[#3570FC]" />

                                    <h1 className="text-2xl font-lato font-bold text-gray-600">
                                        Type
                                    </h1>

                                    <div className="divider -my-2 w-[80%] mx-auto"></div>

                                    <p className="text-xl font-medium font-josefin">
                                        {segment_name}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-2 justify-center col-span-1 py-6 bg-slate-100">
                                    <TiGroupOutline className="text-[50px] text-[#3570FC]" />

                                    <h1 className="text-2xl font-lato font-bold text-gray-600">
                                        Accomodation
                                    </h1>

                                    <div className="divider -my-2 w-[80%] mx-auto"></div>

                                    <p className="text-xl font-medium font-josefin">
                                        6 Guest
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-2 justify-center col-span-1 py-6 bg-slate-100">
                                    <TbBed className="text-[50px] text-[#3570FC]" />

                                    <h1 className="text-2xl font-lato font-bold text-gray-600">
                                        Bedrooms
                                    </h1>

                                    <div className="divider -my-2 w-[80%] mx-auto"></div>

                                    <p className="text-xl font-medium font-josefin">
                                        {bedrooms} Bedrooms
                                    </p>
                                </div>

                                <div className="flex flex-col items-center gap-2 justify-center col-span-1 py-6 bg-slate-100">
                                    <PiBathtubLight className="text-[50px] text-[#3570FC]" />

                                    <h1 className="text-2xl font-lato font-bold text-gray-600">
                                        Bathrooms
                                    </h1>

                                    <div className="divider -my-2 w-[80%] mx-auto"></div>

                                    <p className="text-xl font-medium font-josefin">
                                        {bathrooms} Bathrooms
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            id="details"
                            className="mt-10 p-10 border rounded-lg bg-[#3571fc1b]"
                        >
                            <div>
                                <h1 className="text-3xl font-bold font-lato text-[#1b3980] mb-5">
                                    Details
                                </h1>

                                <div className="grid grid-cols-3 gap-5">
                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Property Id:{" "}
                                        <span className="font-bold ml-1">
                                            {id}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Area:{" "}
                                        <span className="font-bold ml-1">
                                            {area}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Bathrooms:{" "}
                                        <span className="font-bold ml-1">
                                            {bathrooms}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Bedroom:{" "}
                                        <span className="font-bold ml-1">
                                            {bedrooms}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Type:{" "}
                                        <span className="font-bold ml-1">
                                            {segment_name}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Floor number:{" "}
                                        <span className="font-bold ml-1">
                                            {floor_number}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Status:{" "}
                                        <span className="font-bold ml-1">
                                            {status.charAt(0).toUpperCase() +
                                                status.slice(1)}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Built Year:{" "}
                                        <span className="font-bold ml-1">
                                            {year_built ? year_built : "2019"}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Pet Policy:{" "}
                                        <span className="font-bold ml-1">
                                            {pet_policy
                                                .split(" ")
                                                .includes("allowed")
                                                ? "Allow"
                                                : "Not allow"}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        Price:{" "}
                                        <span className="font-bold ml-1">
                                            {price}
                                        </span>
                                    </h3>

                                    <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                                        HOA fees:{" "}
                                        <span className="font-bold ml-1">
                                            {hoa_fees ? hoa_fees : "$50/month"}
                                        </span>
                                    </h3>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div>
                                <h1 className="text-3xl font-bold font-lato text-[#1b3980] mb-5">
                                    Facilities
                                </h1>

                                <ul className="grid grid-cols-3 gap-5">
                                    {facilities.map((facilitie) => (
                                        <li
                                            className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer"
                                            key={facilitie}
                                        >
                                            {facilitie.charAt(0).toUpperCase() +
                                                facilitie.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="divider"></div>

                            <div>
                                <h1 className="text-3xl font-bold font-lato text-[#1b3980] mb-5">
                                    Amenities
                                </h1>

                                <ul className="grid grid-cols-3 gap-5">
                                    {amenities.map((amen) => (
                                        <li
                                            className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer"
                                            key={amen}
                                        >
                                            {amen.charAt(0).toUpperCase() +
                                                amen.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="divider"></div>

                            <div>
                                <h1 className="text-3xl font-bold font-lato text-[#1b3980] mb-5">
                                    About This Listing
                                </h1>

                                <p className="text-lg text-gray-400 font-bold font-lato">
                                    {greating}
                                </p>

                                <br />

                                <p className="text-lg text-gray-400 font-bold font-lato">
                                    {description}
                                </p>

                                <div className=" flex flex-col items-end mt-5">
                                    <h1 className="text-xl text-[#1b397d] font-bold mt-5">
                                        To know more about this{" "}
                                        {segment_name.toLowerCase()}
                                    </h1>

                                    <button className="btn bg-[#3570FC] hover:bg-[#3571fcef] text-white font-bold text-xl mt-4">
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="location">

                        </div>
                    </div>

                    <div className="col-span-4 border">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;
