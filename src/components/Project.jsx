import { Button } from "@/components/ui/button";
const Project = ({ name, gif, demo, github }) => {
    return (
        <div className="bg-[#131313] hover:scale-105 transition-transform lg:w-full items-center text-white shadow-md shadow-gray-700 justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
            <img className="h-[90%] rounded-3xl" src={gif} alt="" />
            <h2 className="text-sm lg:text-2xl font-bold">{name}</h2>
            <div className="w-full flex justify-center gap-5 items-center">
                {demo ? (
                    <a href={demo} target="_blank">
                        <Button className="bg-white w-[150px] h-[50px] px-6 text-xs lg:text-md text-black border-white hover:bg-white hover:text-black rounded-3xl">
                            Live Demo
                        </Button>
                    </a>
                ) : (
                    ""
                )}

                <a href={github} target="_blank">
                    <Button
                        variant="outline"
                        className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                    >
                        GitHub
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Project;
