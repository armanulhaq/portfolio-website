import education from "../assets/graduation.png";
const About = () => {
    return (
        <div
            id="about"
            className="border-b border-gray-600 w-full flex-col justify-around mt-10"
        >
            <div className="flex-col justify-center item-center">
                <div className="flex justify-around text-white text-sm lg:text-lg">
                    Get to know more
                </div>
                <div className="flex justify-around mt-4 text-white text-xl lg:text-6xl font-bold">
                    About Me
                </div>
            </div>
            <div className="bg-black flex flex-col lg:flex-row items-center justify-center lg:h-[90vh]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:space-x-0 h-full">
                    <div className="lg:w-[50%] flex items-center justify-center mb-6 mt-10 lg:mt-0 lg:mb-0">
                        <img
                            className="h-[250px]  lg:h-[450px]  rounded-3xl "
                            src="https://cdn.dribbble.com/users/1681709/screenshots/4735856/media/ea2b79287e9d41bd40c1160d8ea90568.gif"
                            alt="Arman Ul Haq"
                        />
                    </div>
                    <div className="lg:w-[50%] p-10 text-center flex flex-col items-start justify-start gap-3 lg:gap-8">
                        <div className="w-[100%] p-4 lg:p-10 flex gap-5 items-center justify-center  border border-gray-600 rounded-3xl  shadow-md shadow-gray-700">
                            <img className="h-10 w-10" src={education} alt="" />
                            <div>
                                <div className="text-white font-bold text-xl text-start mb-1">
                                    Education
                                </div>
                                <div className="text-gray-400 text-start">
                                    B.Tech from Vellore Institute of Technology
                                </div>
                            </div>
                        </div>
                        <p className="text-white text-sm lg:text-lg text-start ">
                            During my time at university, I undertook a Bachelor
                            of Technology program in Computer Science, where I
                            attained a CGPA of 8.9. Throughout this period, I
                            honed my abilities in core subjects and cultivated a
                            robust proficiency in front-end web development,
                            which enabled me to craft websites with a strong
                            aesthetic appeal. I am committed to perpetual
                            learning and aim to make a meaningful contribution
                            to the field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
