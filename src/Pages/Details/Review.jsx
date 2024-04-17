import { useContext, useState } from "react";
import { Button, Input, InputGroup, Rate } from "rsuite";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { AuthContext } from "./../../Context/AuthProvider";

const texts = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
};

function Review() {
    const [hoverValue, setHoverValue] = useState(1);
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="border rounded-xl p-7 mt-10 shadow-lg ">
                <h1
                    className="text-3xl font-bold font-lato text-[#1b3980] mb-5"
                    data-aos="fade-up"
                >
                    Add Your Review
                </h1>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="bg-[#3571fc11] px-8 py-10"
                >
                    <div className="flex flex-col items-start gap-5">
                        <p
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="130"
                            data-aos-offset="0"
                        >
                            Your rating for this listing :
                        </p>

                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="110"
                            data-aos-offset="0"
                        >
                            <Rate
                                defaultValue={1}
                                onChangeActive={setHoverValue}
                                style={{
                                    color: "#ECDA48",
                                    fontSize: "20px",
                                    margin: "0px",
                                    padding: "0px",
                                }}
                            />{" "}
                            <span>{texts[hoverValue]}</span>
                        </div>
                    </div>

                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="90"
                        data-aos-offset="0"
                    >
                        <div className="space-y-2 mb-5">
                            <p className="text-[#1b3980] font-lato font-bold text-sm">
                                Your name<sup className="text-red-500">*</sup>
                            </p>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <IoMdPerson className="text-[#3570FC]" />
                                </InputGroup.Addon>
                                <Input
                                    placeholder={user.displayName}
                                    defaultValue={user.displayName}
                                />
                            </InputGroup>
                        </div>

                        <div className="space-y-2 mb-5">
                            <p className="text-[#1b3980] font-lato font-bold text-sm">
                                Your email<sup className="text-red-500">*</sup>
                            </p>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <IoMail className="text-[#3570FC]" />
                                </InputGroup.Addon>
                                <Input
                                    placeholder={user.email}
                                    defaultValue={user.email}
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="70"
                        data-aos-offset="0"
                    >
                        <Input
                            as="textarea"
                            rows={8}
                            placeholder="Your Review"
                            style={{ resize: "none" }}
                        />
                    </div>

                    <Button
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="50"
                        data-aos-offset="0"
                        type="submit"
                        appearance="ghost"
                        className="w-full mt-5"
                    >
                        Submit Review
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Review;
