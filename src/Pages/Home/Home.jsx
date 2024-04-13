import { useLoaderData } from "react-router-dom";
import Banner from "./Components/Banner";
import HomeCard from "./Components/HomeCard";

function Home() {
    const homeCards = useLoaderData();

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="200"
            >
                <Banner />
            </div>

            <div>
                <div className="text-center mt-5 md:mt-7 lg:mt-10">
                    <h1 className="text-blue-700 font-bold text-xl md:text-2xl lg:text-4xl mb-4 animate__animated animate__fadeInUp animate__delay-1.2s ">
                        Housing Selection
                    </h1>
                    <h5 className="text-xs md:text-sm lg:text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1.5s">
                        Dive into our <q>Housing Selection</q> to uncover an
                        array of homes <br /> tailored to your unique tastes and
                        requirements
                    </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto overflow-hidden">
                    {homeCards.map((homeCard) => (
                        <HomeCard key={homeCard.id} homeCard={homeCard} />
                    ))}
                </div>
            </div>

            
        </>
    );
}

export default Home;
