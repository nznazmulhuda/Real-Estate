import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

function Feedback({ feedback }) {
    const { client_pic, client_name, rating, client_feedback, feedback_via } =
        feedback;
    return (
        <>
            <div className="bg-white shadow-xl py-7 px-8 rounded-lg justify-between h-[35vh] flex-col flex items-start mb-14 mt-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-[60px] h-[60px] rounded-full">
                            <img
                                className="w-full h-full rounded-full"
                                src={client_pic}
                                alt=""
                            />
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-[#144273] text-sm font-lato uppercase font-bold">
                                {client_name}
                            </h1>

                            <div className="flex items-center gap-1 text-[#144273] font-bold font-josefin text-lg">
                                <IoMdStar className="text-yellow-500 text-xl" />{" "}
                                {rating}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[#878C9F] font-normal leading-5 font-josefin text-sm">
                    {client_feedback}
                </p>

                <button className="bg-[#3270FC] text-white rounded py-3 px-5 font-lato font-bold text-lg">
                    Via {feedback_via}
                </button>
            </div>
        </>
    );
}

Feedback.propTypes = {
    feedback: PropTypes.object,
};

export default Feedback;
