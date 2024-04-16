import useTitle from "react-dynamic-title";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoHomeOutline } from "react-icons/io5";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { LiaInfoSolid } from "react-icons/lia";
import { GrLocationPin } from "react-icons/gr";
import Banner from "./Banner";
import Button from "./Button";
import Gallery from "./Gallery";
import Detail from "./Detail";
import Location from "./Location";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Review from "./Review";
AOS.init();

function Details() {
    const { title, id } = useParams();
    useTitle(title.split("+").join(" "));
    let datas = useLoaderData();
    datas = datas.filter((data) => data.id === id * 1);

    return (
        <>
            <div className="">
                <div id="main">
                    <Banner data={datas[0]} />
                </div>

                <div className="lg:grid lg:grid-cols-12 container mx-auto gap-10 mt-10 lg:relative">
                    <div className=" hidden lg:flex lg:col-span-1">
                        <div className="items-center py-4 rounded-xl sticky top-28 flex-col justify-center p-1 shadow-lg">
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

                    <div className="col-span-12 lg:col-span-7">
                        <Gallery details={datas[0]} />

                        <Detail details={datas[0]} />

                        <Location details={datas[0]} />
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <Contact details={datas[0]} />
                        <Review />
                        <ContactForm details={datas[0]} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;
