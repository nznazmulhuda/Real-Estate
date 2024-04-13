import { useContext, useState } from "react";
import { AuthContext } from "./../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
    const { user, loading } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const [url, setUrl] = useState(user.photoURL);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
            .then(() =>
                loading ? (
                    <span className="loading loading-bars loading-lg absolute left-1/2 -translate-x-1/2"></span>
                ) : (
                    (navigate("/profile"),
                    toast.success("Profile Updated Successfully!"))
                ),
            )
            .catch((e) => console.error(e));
    };
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="w-[10vw] mx-auto rounded-full">
                    <img
                        className="w-full h-full rounded-full bg-zinc-900 hover:brightness-75"
                        src={user.photoURL}
                        alt="Profile Pic"
                    />
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="px-14 py-10">
                        <div className="grid grid-cols-4">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin col-span-1 grid">
                                Name:
                            </h1>

                            <input
                                type="text"
                                className="text-lg md:text-xl lg:text-2xl font-lato font-semibold col-span-3 outline-none border-none"
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={user.displayName}
                                autoFocus
                            />
                        </div>

                        <div className="divider my-0"></div>

                        <div className="grid grid-cols-4">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin col-span-1 ">
                                Email:
                            </h1>

                            <h3 className="text-lg md:text-xl lg:text-2xl font-lato font-semibold col-span-3">
                                {user.email}{" "}
                                <span className="text-xs md:text-sm lg:text-lg text-blue-500 ml-3">
                                    {user.emailVerified
                                        ? "Verified"
                                        : "Not verified"}
                                </span>
                            </h3>
                        </div>

                        <div className="divider my-0"></div>

                        <div className="grid grid-cols-4">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin col-span-1 ">
                                Photo URL:
                            </h1>

                            <input
                                type="url"
                                className="text-lg md:text-xl lg:text-2xl font-lato font-semibold col-span-3 outline-none border-none"
                                defaultValue={user.photoURL}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <div className="text-center mt-10">
                            <button
                                type="submit"
                                onClick={handleUpdateProfile}
                                className="btn text-lg md:text-xl lg:text-xl"
                            >
                                Update Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileEdit;
