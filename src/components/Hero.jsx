import myImage from "../assets/me2.png";
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
                    <div className="flex gap-5 mt-3 lg:mt-10">
                        <a
                            href="/Resume.pdf"
                            download="resume.pdf"
                            className="bg-white text-xs lg:text-xl h-[50px] px-6 text-black flex items-center justify-center hover:text-white hover:bg-[#131313] hover:outline rounded-3xl"
                        >
                            Download CV
                        </a>
                        <Button
                            variant="outline"
                            className="bg-transparent h-[50px] px-6 text-xs lg:text-xl text-white border-white hover:bg-white hover:text-black rounded-3xl"
                        >
                            Contact Info
                        </Button>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex gap-5 items-center justify-center mt-3 lg:mt-5">
                        <a
                            href="https://www.linkedin.com/in/armanulhaq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                                className="h-10 w-10"
                                src={linkedIn}
                                alt="LinkedIn"
                            />
                        </a>
                        <a
                            href="https://github.com/armanulhaq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img
                                className="h-10 w-10"
                                src={github}
                                alt="GitHub"
                            />
                        </a>
                        <a
                            href="https://medium.com/@r_manulhaq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Medium"
                        >
                            <img
                                className="h-10 w-10"
                                src={medium}
                                alt="Medium"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
