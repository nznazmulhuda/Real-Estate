import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";

function Profile() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleDeleteAccount = () => {
        deleteUser(auth.currentUser)
            .then(() => toast.success("Account delete success!"), navigate("/"))
            .catch((e) => toast.error(e.message));
    };

    return (
        <>
            <div className="container mx-auto mt-10 w-full">
                <div className="w-[30vw] md:w-[20vw] lg:w-[10vw] mx-auto rounded-full">
                    <img
                        className="w-full h-full rounded-full bg-zinc-900 hover:brightness-75"
                        src={user.photoURL}
                        alt="Profile Pic"
                    />
                </div>

                <div className="px-14 py-10 w-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin lg:col-span-1 grid">
                            Name:
                        </h1>

                        <h3 className="text-lg md:text-xl lg:text-2xl font-lato font-semibold lg:col-span-3">
                            {user.displayName}
                        </h3>
                    </div>

                    <div className="divider my-0"></div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin lg:col-span-1 ">
                            Email:
                        </h1>
                        <div className="flex items-center w-full lg:col-span-3 pr-5">
                            <input
                                type="url"
                                className="text-lg md:text-xl lg:text-2xl font-lato font-semibold w-full outline-none"
                                defaultValue={user.email}
                                readOnly
                            />{" "}
                            <span className="text-xs md:text-sm lg:text-lg text-blue-500 ml-3">
                                {user.emailVerified
                                    ? "Verified"
                                    : "Not verified"}
                            </span>
                        </div>
                    </div>

                    <div className="divider my-0"></div>

                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin lg:col-span-1 ">
                            Photo URL:
                        </h1>

                        <input
                            type="url"
                            className="text-lg md:text-xl lg:text-2xl font-lato font-semibold lg:col-span-3 w-full outline-none overflow-y-visible "
                            defaultValue={user.photoURL}
                            readOnly
                        />
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <div className="text-center mt-10">
                            <Link to={"/profile-edit"}>
                                <button className="btn text-lg md:text-xl lg:text-xl">
                                    Update Profile
                                </button>
                            </Link>
                        </div>

                        <div className="text-center mt-10">
                            <button
                                onClick={handleDeleteAccount}
                                className="btn btn-primary text-lg md:text-xl lg:text-xl"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
