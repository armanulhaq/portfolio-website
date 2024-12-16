import linkedIn from "../assets/linkedin.svg";
import email from "../assets/email.png";

const Contact = () => {
    return (
        <div id="contact" className="border-b border-gray-600">
            <div className="flex-col mt-10 justify-center item-center">
                <div className="flex justify-around text-white text-sm lg:text-lg">
                    Get in touch with me
                </div>
                <div className="flex justify-around text-white text-4xl mt-2  lg:text-6xl font-bold ">
                    Contact
                </div>
            </div>
            <div className="bg-black flex flex-col lg:flex-row items-center justify-center lg:h-[90vh]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:space-x-0 h-full">
                    <div className="lg:w-[50%] flex items-center justify-center mb-6 mt-10 lg:mt-0 lg:mb-0">
                        <img
                            className="h-[250px] lg:h-[450px] rounded-3xl"
                            src="https://cdn.dribbble.com/users/948184/screenshots/6802410/719_telephone_old_flat_db.gif"
                            alt="Arman Ul Haq"
                        />
                    </div>
                    <div className="hover:scale-105 transition-transform text-xs lg:text-lg text-white p-10 text-center flex flex-col items-start justify-start gap-2 lg:gap-8">
                        <div className="shadow-md shadow-gray-700 w-[100%] p-4 lg:p-10 flex gap-9 items-center justify-center  border border-gray-600 rounded-3xl">
                            <div className="gap-2  flex item-center justify-center">
                                <img
                                    className="h-3 w-3 lg:h-6 lg:w-6"
                                    src={email}
                                    alt=""
                                />
                                <div className="flex justify-center items-center">
                                    <a href="mailto:armanulhaq10@gmail.com">
                                        armanulhaq10@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className=" flex gap-2 item-center justify-center">
                                <a
                                    href="https://www.linkedin.com/in/armanulhaq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex gap-2"
                                >
                                    <img
                                        className="h-3 w-3 lg:h-6 lg:w-6"
                                        src={linkedIn}
                                        alt="LinkedIn"
                                    />
                                    <div className="flex justify-center items-center">
                                        LinkedIn
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
