import PropTypes from "prop-types";
import { IoMdPerson } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import { Button, DatePicker, Input, InputGroup, InputPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";

function ContactForm({ details }) {
    const data = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 AM",
        "13 PM",
        "14 PM",
        "15 PM",
        "16 PM",
    ].map((item) => ({
        label: item,
        value: item,
    }));

    return (
        <>
            <div className="border mt-10 sticky top-28 rounded-xl ">
                <h1 className="text-3xl font-bold font-lato text-white bg-[#3570FC] p-5 rounded-t-lg">
                    Contact Property
                </h1>

                <form className="p-7" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2 mb-5">
                        <p className="text-[#1b3980] font-lato font-bold text-sm">
                            Your name<sup className="text-red-500">*</sup>
                        </p>
                        <InputGroup>
                            <InputGroup.Addon>
                                <IoMdPerson className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input />
                        </InputGroup>
                    </div>

                    <div className="space-y-2 mb-5">
                        <p className="text-[#1b3980] font-lato font-bold text-sm">
                            Your Phone<sup className="text-red-500">*</sup>
                        </p>
                        <InputGroup>
                            <InputGroup.Addon>
                                <MdPhoneEnabled className="text-[#3570FC]" />
                            </InputGroup.Addon>
                            <Input />
                        </InputGroup>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="space-y-2 mb-5">
                            <p className="text-[#1b3980] font-lato font-bold text-sm">
                                Date
                            </p>
                            <DatePicker className="w-full" />
                        </div>

                        <div className="space-y-2 mb-5">
                            <p className="text-[#1b3980] font-lato font-bold text-sm">
                                Time
                            </p>
                            <InputPicker
                                creatable
                                placeholder={"Time"}
                                data={data}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        appearance="ghost"
                        className="w-full mt-5"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </>
    );
}

ContactForm.propTypes = {
    details: PropTypes.object,
};

export default ContactForm;
