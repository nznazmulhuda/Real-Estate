import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "../../../assets/FR2_1.jpg";
import Slide2 from "../../../assets/FR3_1.jpg";
import Slide3 from "../../../assets/SF1.jpg";
import Slide4 from "../../../assets/SF2.jpg";
import Slide5 from "../../../assets/VR2.jpg";
import Slide6 from "../../../assets/VR3.jpg";
import Slide7 from "../../../assets/VR4.jpg";

function Banner() {
    return (
        <>
            <div className="relative mt-5 rounded-xl container mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-[80vh] md:h-[80vh] lg:h-[70vh] rounded-xl"
                >
                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide1}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide2}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide3}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide4}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide5}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide6}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-gray-700 to-blue-100">
                            <img
                                className="w-full h-full opacity-40"
                                src={Slide7}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="absolute z-[9998] top-1/2 px-5 md:px-20 lg:px-20 -translate-y-1/2 w-full">
                    <div className="w-full">
                        <h3 className="text-white text-sm font-semibold font-lato mb-3 md:mb-5 lg:mb-5">
                            Real Estate Searching Platform
                        </h3>

                        <h1 className="text-white font-lato text-xl md:text-3xl lg:text-5xl font-semibold leading-6 md:leading-8 lg:leading-[50px] w-[90%] md:w-[60%] lg:w-[40%] mb-3 md:mb-5 lg:mb-8">
                            Find The House of Your{" "}
                            <span className="font-extrabold">
                                <span className="text-2xl md:text-4xl lg:text-6xl text-blue-700">
                                    D
                                </span>
                                ream
                            </span>{" "}
                            Using Our Platform
                        </h1>

                        <div className="divide-y md:divide-y-0 lg:divide-y-0 md:divide-x lg:divide-x flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center bg-white rounded-lg w-full md:w-[80%] lg:w-[40%] md:pl-5 lg:pl-5 mb-6">
                            <div className="w-full md:w-[40%] lg:w-[40%] p-5 md:p-0 lg:p-0">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="outline-none border-none bg-transparent w-full"
                                />
                            </div>

                            <div className="w-full md:w-[40%] lg:w-[40%]">
                                <select className="select focus:border-none focus:outline-none">
                                    <option disabled selected>
                                        All Statuses
                                    </option>
                                    <option>For Rent</option>
                                    <option>For Sale</option>
                                </select>
                            </div>

                            <div className="w-full md:w-[25%] lg:w-[20%] p-5 md:p-0 lg:p-0">
                                <button className="flex items-center bg-[#3270FC] text-white w-full btn hover:bg-[#326ffcde] text-lg">
                                    Search <FaSearch />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row lg:flex-row gap-3 text-white items-center mb-5 md:mb-0 lg:mb-0">
                            <h1 className="text-sm font-semibold font-lato">
                                Need more search options?{" "}
                            </h1>
                            <button className="py-2 px-4 rounded-3xl bg-[#3270FC] border-none text-white font-semibold hover:bg-[#326ffcda]">
                                Advanced Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
