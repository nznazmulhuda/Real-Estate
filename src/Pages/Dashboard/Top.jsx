import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OffIcon from "@rsuite/icons/Off";
import PropTypes from "prop-types";

function Top({ title }) {
    const { user, signOutUser } = useContext(AuthContext);
    const [isHover, setIsHover] = useState(false);
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <h3 className="uppercase text-[#1b3678]">{title}</h3>

                <div className="bg-white flex items-center justify-between mt-4 lg:mt-0 lg:w-[25%] px-1 lg:px-3 py-2 rounded-xl relative shadow-lg">
                    <div className="flex items-center gap-1 lg:gap-3 border-r flex-grow lg:mr-3">
                        <div className="w-10 h-10 md:w-10 md:h-10 lg:w-20 lg:h-20 lg:border lg:p-2 rounded-full flex items-center justify-center">
                            <img
                                className="rounded-full w-full h-fulll"
                                src={user.photoURL}
                                alt=""
                            />
                        </div>
                        <h6 className="text-xs ">
                            Welcome,{" "}
                            <span className="text-[#3570FC]">
                                {user.displayName}
                            </span>
                        </h6>
                    </div>

                    <div
                        className="cursor-pointer h-full flex items-center justify-center"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        onClick={signOutUser}
                    >
                        <OffIcon className=" text-sm lg:text-xl text-[#3570FC] mx-2 lg:mx-4" />
                    </div>

                    <div
                        className={`absolute top-full right-0 mt-2 rounded-xl ${
                            isHover ? "flex" : "hidden"
                        }`}
                    >
                        <h6 className="bg-[#3570FC] rounded-xl text-white py-2 px-4">
                            Sign out
                        </h6>
                    </div>
                </div>
            </div>

            <div className="divider my-7"></div>
        </>
    );
}

Top.propTypes = {
    title: PropTypes.string,
};

export default Top;
