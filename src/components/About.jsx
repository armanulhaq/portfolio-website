import myImage from "../assets/me.jpg";
import education from "../assets/graduation.png";
const About = () => {
    return (
        <div className="w-full flex-col justify-around">
            <div className="flex-col justify-center item-center">
                <div className="flex justify-around text-white text-lg">
                    Get to know more
                </div>
                <div className="flex justify-around text-white text-6xl font-bold">
                    About Me
                </div>
            </div>
            <div className="bg-[#131313] flex flex-col lg:flex-row items-center justify-center h-[90vh]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:space-x-0 h-full">
                    <div className="lg:w-[50%] flex items-center justify-center mb-6 lg:mb-0">
                        <img
                            className="h-[250px] w-[250px] lg:h-[450px] lg:w-[450px] rounded-3xl"
                            src={myImage}
                            alt="Arman Ul Haq"
                        />
                    </div>
                    <div className="lg:w-[50%] p-10 text-center flex flex-col items-start justify-start gap-8">
                        <div className="w-[100%] p-10 flex gap-5 items-center justify-center  border border-gray-600 rounded-3xl">
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
                        <p className="text-white text-start ">
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
