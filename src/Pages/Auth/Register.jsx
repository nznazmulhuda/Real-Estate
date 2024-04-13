import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "react-dynamic-title";
import { useForm } from "react-hook-form";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

function Register() {
    useTitle("Register");
    const [passVer, setPassVer] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    // console.log(errors);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("username");
        const pass = form.get("password");
        createUser(email, pass)
            .then((result) => console.log(result))
            .catch((e) => console.error(e));
        e.target.reset();
    };

    const test = (e) => {
        setPassVer(e.target.value);
    };

    return (
        <>
            <div className="mx-auto container">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col w-4/5 md:w-4/5 lg:w-3/5 mx-auto p-5 mt-10 shadow-xl rounded-lg"
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

                    <input
                        type="password"
                        placeholder="Enter your password"
                        onKeyUp={test}
                        className={`outline-none px-3 border-b-2 pb-2 pt-2 mb-4 ${
                            errors.Password && `border-red-500`
                        }`}
                        {...register("Password", {
                            required: true,
                            min: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        })}
                    />

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
                        type="submit"
                        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
                        data-rounded="rounded-md"
                        data-primary="blue-600"
                        data-primary-reset="{}"
                    />
                </form>
            </div>
        </>
    );
}

export default Register;
