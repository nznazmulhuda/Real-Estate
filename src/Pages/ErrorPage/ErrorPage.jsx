import { Link } from "react-router-dom";
import style from "./Style.module.css";
import bg2 from "../../assets/bg2.jpg";
import useTitle from "react-dynamic-title";
function ErrorPage() {
    useTitle("Page Not Found");
    return (
        <>
            <div className="w-full h-[100vh] relative bg-[#1d4196]">
                <img
                    className="w-full h-full opacity-60 blur-md"
                    src={bg2}
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center md:gap-5 lg:gap-10">
                    <h1 className={`${style.message} drop-shadow-xl0`}>
                        Opps!
                    </h1>

                    <h3 className="text-[#102148] text-[4vw] md:text-[3vs] lg:text-[2vw]">
                        404 - Page not found
                    </h3>
                    <Link
                        to={"/"}
                        className="hover:no-underline focus:no-underline"
                    >
                        <button className="text-white lg:text-blue-500 font-bold md:text-xl lg:text-2xl border border-blue-500 hover:bg-blue-600 py-3 px-6 transition-all rounded-xl hover:text-white">
                            Go to homepage
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
