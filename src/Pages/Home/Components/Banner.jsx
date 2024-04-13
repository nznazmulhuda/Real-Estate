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
                    className="mySwiper h-[50vh] rounded-xl"
                >
                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide1}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide2}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide3}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide4}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide5}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide6}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-zinc-900">
                            <img
                                className="w-full h-full opacity-20"
                                src={Slide7}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="absolute z-[9998] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="text-center mx-auto">
                        <div className="animate__animated animate__fadeInUp">
                            <span className="text-2xl md:text-4xl lg:text-5xl bg-300% font-bold font-lato bg-gradient-to-l from-white via-blue-700 to-blue-300 text-transparent bg-clip-text animate-gradient md:leading-10 lg:leading-[50px]">
                                Discover Your Perfect Home <br /> Where Dreams
                                Meet Reality with Ease
                            </span>
                        </div>

                        <h2 className="text-lg lg:text-xl text-white mt-3 mb-3 font-semibold font-josefin lg:leading-10 animate__animated animate__fadeInUp animate__delay-.2s">
                            Welcome to{" "}
                            <span className="text-2xl text-blue-600">D</span>
                            ream{" "}
                            <span className="text-2xl text-blue-600">D</span>
                            wellings, your trusted source for finding home sweet
                            home.
                        </h2>
                    </div>

                    <div className="w-4/5 lg:w-1/2 mx-auto bg-white flex justify-between px-3 lg:px-6 py-1 lg:py-3 rounded-full animate__animated animate__fadeInUp animate__delay-.4s">
                        <input
                            className="outline-none border-none w-full font-lato bg-transparent placeholder:text-sm"
                            type="text"
                            placeholder="Search your dream home category..."
                        />
                        <button>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
