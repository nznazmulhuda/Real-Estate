import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Top from "./../Dashboard/Top";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Button, Input, InputGroup } from "rsuite";
import { FaKey } from "react-icons/fa6";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import useTitle from "react-dynamic-title";

function Profile() {
    useTitle("Profile");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <>
            <Top title={"Profile"} />

            <form onSubmit={(e) => e.preventDefault()}>
                {/* change avtar */}
                <div className="bg-white rounded-b-lg">
                    <div
                        className="flex items-center gap-3 text-[#152b5f] mb-3 px-5 py-3"
                        data-aos="fade-up"
                    >
                        <IoPersonCircleSharp className="text-2xl text-[#3570FC]" />{" "}
                        <h5>Avatar</h5>
                    </div>

                    <div className="w-full h-[25vh] relative animate__animated animate__fadeIn">
                        <img
                            className="w-full h-full rounded-b-lg"
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=sph"
                            alt=""
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 px-5 flex items-center gap-10">
                            <div className="w-24 h-24 bg-[#b7b1b151] p-3 rounded-lg animate__animated animate__fadeIn animate__delay-1s">
                                <img
                                    className="rounded-lg w-full h-full"
                                    src={user.photoURL}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="px-5 py-3 mt-5">
                    <div
                        className="flex items-center gap-3 text-[#152b5f] mb-3"
                        data-aos="fade-up"
                    >
                        <FaKey className="text-2xl text-[#3570FC]" />{" "}
                        <h5>Personal Info</h5>
                    </div>

                    <hr />

                    <div
                        className="mb-6"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="50"
                        data-aos-offset="1"
                    >
                        <h6 className="text-sm text-[#2147a2] mb-3">
                            First Name
                        </h6>
                        <InputGroup>
                            <InputGroup.Addon>
                                <IoPersonOutline className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input
                                placeholder={user.displayName.split(" ")[0]}
                                disabled
                            />
                        </InputGroup>
                    </div>

                    <div
                        className="mb-6"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="70"
                        data-aos-offset="1"
                    >
                        <h6 className="text-sm text-[#2147a2] mb-3">
                            Last Name
                        </h6>
                        <InputGroup>
                            <InputGroup.Addon>
                                <IoPerson className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input
                                placeholder={user.displayName
                                    .split(" ")
                                    .slice(1)
                                    .join(" ")}
                                disabled
                            />
                        </InputGroup>
                    </div>

                    <div
                        className="mb-6"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="90"
                        data-aos-offset="1"
                    >
                        <h6 className="text-sm text-[#2147a2] mb-3">
                            Photo Url
                        </h6>
                        <InputGroup>
                            <InputGroup.Addon>
                                <IoLink className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input
                                placeholder={user.photoURL}
                                type="url"
                                disabled
                            />
                        </InputGroup>
                    </div>

                    <div
                        className="mb-6"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="110"
                        data-aos-offset="1"
                    >
                        <h6 className="text-sm text-[#2147a2] mb-3">
                            Email Address
                        </h6>
                        <InputGroup>
                            <InputGroup.Addon>
                                <MdOutlineMail className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input
                                placeholder={
                                    user.email
                                        ? user.email
                                        : "No Mail Address Added"
                                }
                                disabled
                            />
                            <InputGroup.Button>
                                {user.emailVerified ? (
                                    <MdVerified className="text-green-500" />
                                ) : (
                                    <GoUnverified className="text-red-500" />
                                )}
                            </InputGroup.Button>
                        </InputGroup>
                    </div>

                    <div
                        className="mb-6"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="130"
                        data-aos-offset="1"
                    >
                        <h6 className="text-sm text-[#2147a2] mb-3">phone</h6>
                        <InputGroup>
                            <InputGroup.Addon>
                                <AiOutlinePhone className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input
                                placeholder={
                                    user.phoneNumber
                                        ? user.phoneNumber
                                        : "Your number"
                                }
                                type="number"
                                disabled
                            />
                        </InputGroup>
                    </div>
                </div>
            </form>
            <hr />
            <div
                className="px-5"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="150"
                data-aos-offset="1"
            >
                <Button
                    className="w-full"
                    appearance="ghost"
                    onClick={() => navigate("/dashboard/settings")}
                >
                    Update Profile
                </Button>
            </div>
        </>
    );
}

export default Profile;
