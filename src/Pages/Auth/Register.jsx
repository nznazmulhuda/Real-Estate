import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "react-dynamic-title";
import { useForm } from "react-hook-form";
import {
    FaRegCircle,
    FaRegCheckCircle,
    FaGithub,
    FaGoogle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Register() {
    useTitle("Register");

    const { state } = useLocation();
    const navigate = useNavigate();
    const [passVisible, setPassVisible] = useState(false);

    const { createUser, googleUser, githubUser } = useContext(AuthContext);
    const [passVer, setPassVer] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleRegister = (e) => {
        const name = e.Name;
        const photoUrl = e.Photo_Url;
        const email = e.Email;
        const pass = e.Password;

        createUser(email, pass)
            .then((res) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl,
                });
                toast.success("Login Success!");
                navigate(state ? state : "/");
                console.log(res);
            })
            .catch((e) => toast.error(e.message));
        setPassVer("");
        reset();
    };

    const handleGoogle = () => {
        googleUser()
            .then(
                () => toast.success("Google Login Success!"),
                navigate(state ? state : "/"),
            )
            .catch((e) => toast.error(e.message));
    };

    const handleGithub = () => {
        githubUser()
            .then(
                () => toast.success("Github Login Success!"),
                navigate(state ? state : "/"),
            )
            .catch((e) => toast.error(e.message));
    };

    const test = (e) => {
        setPassVer(e.target.value);
    };

    return (
        <>
            <div className="mx-auto container">
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="flex flex-col w-4/5 md:w-4/5 lg:w-3/5 mx-auto p-5 md:p-7 lg:p-10 mt-10 rounded-lg shadow-lg"
                >
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className={`outline-none px-3 border-b-2 pb-2 pt-2 mb-4 ${
                            errors.Name && `border-red-500`
                        }`}
                        {...register("Name", { required: true })}
                    />

                    {errors.Name && (
                        <p className="text-red-600 text-sm leading-none -mt-3">
                            required.
                        </p>
                    )}

                    <input
                        type="email"
                        placeholder="Enter you email"
                        className={`outline-none px-3 border-b-2 pb-2 pt-2 mb-4 ${
                            errors.Email && `border-red-500`
                        }`}
                        {...register("Email", { required: true })}
                    />

                    {errors.Email && (
                        <p className="text-red-600 text-sm leading-none -mt-3">
                            required.
                        </p>
                    )}

                    <input
                        type="url"
                        placeholder="Enter your photo url"
                        className={`outline-none px-3 border-b-2 pb-2 pt-2 mb-4 ${
                            errors.Photo_Url && `border-red-500`
                        }`}
                        {...register("Photo_Url", { required: true })}
                    />

                    {errors.Photo_Url && (
                        <p className="text-red-600 text-sm leading-none -mt-3">
                            required.
                        </p>
                    )}

                    <div className="flex items-center justify-between relative">
                        <input
                            type={passVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            onKeyUp={test}
                            className={`outline-none px-3 border-b-2 pb-2 pt-2 mb-4 ${
                                errors.Password && `border-red-500`
                            } w-full`}
                            {...register("Password", {
                                required: true,
                                min: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            })}
                        />
                        {passVisible ? (
                            <FaRegEye
                                onClick={() => setPassVisible(!passVisible)}
                                className="absolute right-3 cursor-pointer"
                            />
                        ) : (
                            <FaRegEyeSlash
                                onClick={() => setPassVisible(!passVisible)}
                                className="absolute right-3 cursor-pointer"
                            />
                        )}
                    </div>

                    <div className="pl-3">
                        <p className="flex items-center gap-2">
                            {passVer.length >= 6 ? (
                                <FaRegCheckCircle className="text-green-500" />
                            ) : (
                                <FaRegCircle className="text-red-500" />
                            )}
                            <span className="-mt-1">min 6 char</span>
                        </p>

                        <p className="flex items-center gap-2">
                            {/[a-z]/.test(passVer) ? (
                                <FaRegCheckCircle className="text-green-500" />
                            ) : (
                                <FaRegCircle className="text-red-500" />
                            )}
                            <span className="-mt-1">must (a-z)</span>
                        </p>

                        <p className="flex items-center gap-2">
                            {/[A-Z]/.test(passVer) ? (
                                <FaRegCheckCircle className="text-green-500" />
                            ) : (
                                <FaRegCircle className="text-red-500" />
                            )}
                            <span className="-mt-1">must (A-Z)</span>
                        </p>
                    </div>

                    <input
                        type="Submit"
                        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
                        data-rounded="rounded-md"
                        data-primary="blue-600"
                        data-primary-reset="{}"
                        defaultValue={"Register"}
                    />

                    <div className="divider py-5">
                        <h1 className="text-lg font-lato font-bold">
                            Continue with
                        </h1>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center gap-5">
                            <FaGoogle
                                className="text-2xl cursor-pointer"
                                onClick={handleGoogle}
                            />

                            <FaGithub
                                className="text-2xl cursor-pointer"
                                onClick={handleGithub}
                            />
                        </div>

                        <Link to={"/login"}>
                            <h1 className="text-blue-500 hover:underline font-semibold mt-3 text-lg no-underline">
                                Already have an account
                            </h1>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
