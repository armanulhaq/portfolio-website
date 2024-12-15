import myImage from "../assets/me.jpg"; // Adjust the path as needed
import linkedIn from "../assets/linkedIn.svg";
import github from "../assets/github.svg";
import medium from "../assets/medium.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="bg-[#131313] flex flex-col lg:flex-row items-center justify-center h-[90vh]">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:space-x-40 h-full">
                <div className="flex items-center justify-center mb-6 lg:mb-0">
                    <img
                        className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] rounded-full"
                        src={myImage}
                        alt="Arman Ul Haq"
                    />
                </div>
                <div className="text-white font-bold text-center flex flex-col items-center justify-center gap-2">
                    <div className="text-md lg:text-lg">Hello, I&apos;m</div>
                    <div className="text-3xl lg:text-5xl">Arman Ul Haq</div>
                    <div className="text-lg lg:text-2xl">
                        Frontend Developer
                    </div>
                    <div className="flex gap-5 mt-10">
                        <Button className="bg-white h-[50px] text-black hover:text-white hover:outline rounded-3xl">
                            Download CV
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent h-[50px] text-white border-white hover:bg-white hover:text-black rounded-3xl"
                        >
                            Contact Info
                        </Button>
                    </div>
                    <div className="flex gap-5 items-center justify-center mt-5">
                        <a
                            href="https://www.linkedin.com/in/armanulhaq"
                            target="_blank"
                        >
                            <img
                                className="h-10 w-10"
                                src={linkedIn}
                                alt="My LinkedIn profile"
                            />
                        </a>
                        <a href="https://github.com/armanulhaq" target="_blank">
                            <img
                                className="h-10 w-10"
                                src={github}
                                alt="My GitHub profile"
                            />
                        </a>
                        <a
                            href="https://medium.com/@r_manulhaq"
                            target="_blank"
                        >
                            <img
                                className="h-10 w-10"
                                src={medium}
                                alt="My Medium profile"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
