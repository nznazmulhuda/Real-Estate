import Banner from "./Components/Banner";
import HomeCard from "./Components/HomeCard";
import useTitle from "react-dynamic-title";
import { useEffect, useState } from "react";
import Style from "./Home.module.css";
import Feedback from "./Components/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Home() {
    useTitle("Home");
    const [homeCards, setHomeCards] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch("./ResidentialsData.json")
            .then((res) => res.json())
            .then((data) => setHomeCards(data));
    }, []);

    useEffect(() => {
        fetch("./feedback.json")
            .then((res) => res.json())
            .then((data) => setFeedbacks(data));
    }, []);

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="200"
            >
                <Banner />
            </div>

            <div className="bg-white">
                <div className="text-center pt-5 md:pt-7 lg:pt-10">
                    <h1 className="text-blue-700 font-bold text-xl md:text-2xl lg:text-4xl mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                        Housing Selection
                    </h1>
                    <h5 className="text-xs md:text-sm lg:text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">
                        Dive into our <q>Housing Selection</q> to uncover an
                        array of homes <br /> tailored to your unique tastes and
                        requirements
                    </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-0 lg:gap-5 mx-auto overflow-hidden">
                    {homeCards.map((homeCard) => (
                        <HomeCard key={homeCard.id} homeCard={homeCard} />
                    ))}
                </div>

                <div className="mt-20 overflow-hidden">
                    <h1
                        className="text-blue-700 font-bold text-xl md:text-2xl lg:text-4xl mb-6 text-center"
                        data-aos="fade-up"
                    >
                        What Our Clients Say
                    </h1>

                    <Swiper
                        slidesPerView={4}
                        centeredSlides={true}
                        spaceBetween={257}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        data-aos="fade-left"
                    >
                        {feedbacks.map((feedback) => (
                            <SwiperSlide key={feedback.id}>
                                <Feedback feedback={feedback} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="relative translate-y-1/2">
                    <div
                        className={`container mx-auto ${Style.newsletter} relative overflow-hidden flex items-center justify-between flex-col md:flex-row lg:flex-row gap-5 md:gap-0 lg:gap-0 py-10 px-5 md:py-14 md:px-7 lg:py-20 lg:px-16`}
                        data-aos="fade-up"
                    >
                        <div>
                            <h3 className="text-white font-lato text-sm font-semibold uppercase">
                                newsletter
                            </h3>

                            <h1 className="text-xl font-semibold text-white font-josefin">
                                Sign up for newsletter and get latest news and
                                update
                            </h1>
                        </div>

                        <div className="bg-white p-2 rounded-md w-full md:w-[50%] lg:w-[40%] flex justify-between">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="text-[#666] placeholder:text-sm font-semibold font-lato outline-none border-none bg-transparent pl-3 w-full"
                            />
                            <button className="bg-[#3270FC] rounded px-8 text-white py-2 cursor-pointer">
                                Subscribe
                            </button>
                        </div>

                        <div className="absolute w-[300px] h-[300px] bg-[#ffffff46] -bottom-[140px] rounded-full -right-[80px]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
