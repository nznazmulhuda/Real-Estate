import PropTypes from "prop-types";

function Detail({ details }) {
    const {
        id,
        segment_name,
        description,
        price,
        status,
        area,
        facilities,
        bedrooms,
        bathrooms,
        floor_number,
        year_built,
        hoa_fees,
        amenities,
        pet_policy,
    } = details;

    const greating =
        "Welcome to your dream home! Nestled in a serene suburban neighborhood, this exquisite single-family residence offers an unparalleled living experience that combines luxury, comfort, and tranquility. Step through the grand double doors into a sprawling open-concept living space, flooded with natural light and adorned with elegant architectural details. The gourmet kitchen is a chef's paradise, featuring high-end appliances, custom cabinetry, and a spacious island perfect for culinary creations and entertaining guests. Retreat to the opulent master suite, boasting a lavish en-suite bathroom complete with a deep soaking tub, oversized shower, and dual vanities. Each additional bedroom is generously sized and appointed with luxurious finishes, providing ample space for family and guests. Outside, the meticulously landscaped grounds create a private oasis, offering lush greenery, a sparkling pool, and multiple seating areas for outdoor relaxation and enjoyment. Whether you're hosting gatherings in the expansive outdoor living space, unwinding in the cozy family room by the fireplace, or simply taking in the breathtaking views from the balcony, every moment spent in this magnificent home is sure to be unforgettable. With its prime location, impeccable craftsmanship, and unparalleled amenities, this is more than just a house – it's a place to call home.";
    return (
        <>
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
                            <span className="font-bold ml-1">{id}</span>
                        </h3>

                        <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                            Area: <span className="font-bold ml-1">{area}</span>
                        </h3>

                        <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                            Bathrooms:{" "}
                            <span className="font-bold ml-1">{bathrooms}</span>
                        </h3>

                        <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                            Bedroom:{" "}
                            <span className="font-bold ml-1">{bedrooms}</span>
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
                                {pet_policy.split(" ").includes("allowed")
                                    ? "Allow"
                                    : "Not allow"}
                            </span>
                        </h3>

                        <h3 className="bg-[#3570FC] text-white py-2 px-3 text-center rounded-lg text-lg font-bold font-lato hover:bg-[#3571fcf0] cursor-pointer">
                            Price:{" "}
                            <span className="font-bold ml-1">{price}</span>
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
                                {amen.charAt(0).toUpperCase() + amen.slice(1)}
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
                            To know more about this {segment_name.toLowerCase()}
                        </h1>

                        <button className="btn bg-[#3570FC] hover:bg-[#3571fcef] text-white font-bold text-xl mt-4">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

Detail.propTypes = {
    details: PropTypes.object,
};

export default Detail;
