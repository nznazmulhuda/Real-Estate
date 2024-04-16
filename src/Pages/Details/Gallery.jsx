import { TiGroupOutline } from "react-icons/ti";
import { TbBed } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import PropTypes from "prop-types";

function Gallery({ details }) {
    const { segment_name, image_urls, bedrooms, bathrooms } = details;
    return (
        <>
            <div id="gallery">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-5 border divide-x">
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
        </>
    );
}
Gallery.propTypes = {
    details: PropTypes.object,
};

export default Gallery;
