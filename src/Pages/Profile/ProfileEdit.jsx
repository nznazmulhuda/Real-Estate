import { useContext, useState } from "react";
import { AuthContext } from "./../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Top from "./../Dashboard/Top";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Button, Input, InputGroup } from "rsuite";
import { FaCamera } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { BsUnlock } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { GoShieldLock } from "react-icons/go";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import useTitle from "react-dynamic-title";

function ProfileEdit() {
    useTitle("Update Profile");
    const { user, loading } = useContext(AuthContext);
    const [firstName, setFirstName] = useState(user.displayName.split(" ")[0]);
    const [lastName, setLastName] = useState(
        user.displayName.split(" ").slice(1),
    );
    const [url, setUrl] = useState(user.photoURL);
    const navigate = useNavigate();
    const name = firstName + " " + lastName;
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
            .then(() =>
                loading ? (
                    <span className="loading loading-bars loading-lg absolute left-1/2 -translate-x-1/2"></span>
                ) : (
                    (navigate("/dashboard/profile"),
                    toast.success("Profile Updated Successfully!"))
                ),
            )
            .catch((e) => console.error(e));
    };
    const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Top title={"Settings"} />

            <div className="grid grid-cols-6 gap-10">
                <form
                    onSubmit={handleUpdateProfile}
                    className="col-span-6 lg:col-span-4"
                >
                    {/* change avtar */}
                    <div className="bg-white rounded-b-lg">
                        <div
                            className="flex items-center gap-3 text-[#152b5f] mb-3 px-5 py-3"
                            data-aos="fade-up"
                        >
                            <IoPersonCircleSharp className="text-2xl text-[#3570FC]" />{" "}
                            <h5>Change Avatar</h5>
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

                                <input
                                    type="file"
                                    id="file"
                                    className="absolute hidden -z-[9999]"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="file"
                                    className="text-white cursor-pointer animate__animated animate__fadeInLeft
                                    animate__delay-1s"
                                >
                                    Upload New Photo
                                </label>
                            </div>

                            <div className="animate__animated animate__fadeInUp animate__delay-1s">
                                <input
                                    type="file"
                                    id="coverPic"
                                    accept="image/*"
                                    className="absolute hidden -z-[99999]"
                                />
                                <label
                                    htmlFor="coverPic"
                                    className="btn text-white bg-[#3570FC] absolute bottom-0 right-0 border-none hover:bg-[#3571fce2] rounded-none rounded-br-lg"
                                >
                                    <FaCamera /> Change Cover
                                </label>
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
                                    onChange={(e) =>
                                        setFirstName(
                                            e
                                                ? e
                                                : user.displayName.split(
                                                      " ",
                                                  )[0],
                                        )
                                    }
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
                                    onChange={(e) =>
                                        setLastName(
                                            e
                                                ? e
                                                : user.displayName
                                                      .split(" ")
                                                      .slice(1),
                                        )
                                    }
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
                                    onChange={(e) =>
                                        setUrl(e ? e : user.photoURL)
                                    }
                                    type="url"
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
                                            : "Your Mail Address"
                                    }
                                    disabled={user.email ? true : false}
                                />
                            </InputGroup>
                        </div>

                        <div
                            className="mb-6"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="130"
                            data-aos-offset="1"
                        >
                            <h6 className="text-sm text-[#2147a2] mb-3">
                                phone
                            </h6>
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
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <div
                        className="w-full px-5"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="150"
                        data-aos-offset="1"
                    >
                        <Button
                            appearance="ghost"
                            className="w-full"
                            type="submit"
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="col-span-6 lg:col-span-2"
                >
                    <div className="">
                        <div
                            className="flex items-center gap-3 text-[#152b5f] mb-3 px-5 py-3"
                            data-aos="fade-up"
                        >
                            <FaKey className="text-2xl text-[#3570FC]" />{" "}
                            <h5>Change Password</h5>
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
                                Current Password
                            </h6>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <BsUnlock className="text-[#3570FC]" />
                                </InputGroup.Addon>
                                <Input
                                    type={visible ? "text" : "password"}
                                    placeholder="********"
                                />
                                <InputGroup.Button onClick={handleChange}>
                                    {visible ? <EyeIcon /> : <EyeSlashIcon />}
                                </InputGroup.Button>
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
                                New Password
                            </h6>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <BsLock className="text-[#3570FC]" />
                                </InputGroup.Addon>
                                <Input
                                    type={visible ? "text" : "password"}
                                    placeholder="********"
                                />
                                <InputGroup.Button onClick={handleChange}>
                                    {visible ? <EyeIcon /> : <EyeSlashIcon />}
                                </InputGroup.Button>
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
                                New Password
                            </h6>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <GoShieldLock className="text-[#3570FC]" />
                                </InputGroup.Addon>

                                <Input
                                    type={visible ? "text" : "password"}
                                    placeholder="********"
                                />
                            </InputGroup>
                        </div>

                        <div
                            className="w-full"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="110"
                            data-aos-offset="1"
                        >
                            <Button
                                appearance="ghost"
                                className="w-full"
                                type="submit"
                            >
                                Change Password
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileEdit;
