import myImage from "../assets/me.jpg"; // Adjust the path as needed
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="bg-[#131313] flex justify-center space-x-40 py-40">
            <div className="text-white font-bold items-center flex justify-center">
                <img
                    className="h-[320px] w-[320px] rounded-full "
                    src={myImage}
                    alt=""
                />
            </div>
            <div className="text-white font-bold text-center flex flex-col items-center justify-center gap-2">
                <div className="text-lg ">Hello, I&apos;m</div>
                <div className="text-5xl">Arman Ul Haq</div>
                <div className="text-2xl">Frontend Developer</div>
                <div className="flex gap-5  mt-10">
                    <Button className="bg-white h-[50px] text-black   hover:text-white hover:outline rounded-3xl">
                        Download CV
                    </Button>
                    <Button
                        variant="outline"
                        className="bg-transparent h-[50px] text-white border-white hover:bg-white hover:text-black rounded-3xl"
                    >
                        Contact Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
