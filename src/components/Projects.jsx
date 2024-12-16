import { Button } from "@/components/ui/button";
const Projects = () => {
    return (
        <div
            id="projects"
            className="border-b border-gray-600 justify-center item-center"
        >
            <div className="flex-col mt-10 ">
                <div className="flex justify-around text-white text-sm lg:text-lg">
                    Check out my recent
                </div>
                <div className="flex justify-around text-white text-4xl mt-2  lg:text-6xl font-bold ">
                    Projects
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-5 lg:gap-20 lg:px-[300px] px-5">
                <div className="bg-[#131313] hover:scale-105 transition-transform lg:w-full items-center text-white shadow-md shadow-gray-700 justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="h-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/97870/screenshots/1425320/media/676d206f27d9808d168887791efc4b5e.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">
                        Fusion Store
                    </h2>
                    <div className="w-full flex justify-center gap-5 items-center">
                        <a
                            href="https://fusion-store.vercel.app/"
                            target="_blank"
                        >
                            <Button className="bg-white w-[150px] h-[50px] px-6 text-xs lg:text-md text-black border-white hover:bg-white hover:text-black rounded-3xl">
                                Live Demo
                            </Button>
                        </a>
                        <a
                            href="https://github.com/armanulhaq/fusion-store"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bg-[#131313] hover:scale-105 transition-transform w-full shadow-md shadow-gray-700 items-center text-white justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="h-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/224485/screenshots/1932553/media/9ae59c34effbc06ac79c8e8a97d87461.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">
                        Motion Detection
                    </h2>
                    <div className="w-full flex justify-center items-center">
                        <a
                            href="https://github.com/armanulhaq/camera-alert"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bg-[#131313] hover:scale-105 transition-transform shadow-md shadow-gray-700 w-full items-center text-white justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="h-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/41854/screenshots/3300055/media/d9de719e83c7dea53ed3cc1b7b55ff8a.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">
                        Fusion News
                    </h2>
                    <div className="w-full flex gap-5 justify-center items-center">
                        <a
                            href="https://github.com/armanulhaq/fusion-news"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bg-[#131313] hover:scale-105 transition-transform shadow-md shadow-gray-700 w-full items-center text-white justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="h-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/808936/screenshots/3232987/media/fb181b09abf9419fe9200207b1c35a47.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">
                        University Website
                    </h2>
                    <div className="w-full gap-5 flex justify-center items-center">
                        <a
                            href="https://fusionuniversity.vercel.app/"
                            target="_blank"
                        >
                            <Button className="bg-white w-[150px] h-[50px] px-6 text-xs lg:text-md text-black border-white hover:bg-white hover:text-black rounded-3xl">
                                Live Demo
                            </Button>
                        </a>
                        <a
                            href="https://github.com/armanulhaq/fusion-university"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bg-[#131313] hover:scale-105 transition-transform shadow-md shadow-gray-700 w-full items-center text-white justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="h-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/28455/screenshots/1389791/media/bd9f8d16f8a3027d4dccb852d44b37d6.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">
                        Weather Forecast
                    </h2>
                    <div className="w-full  gap-5 flex justify-center items-center">
                        <a
                            href="https://armanulhaq-weather-dashboard-main-gxdudm.streamlit.app/"
                            target="_blank"
                        >
                            <Button className="bg-white w-[150px] h-[50px] px-6 text-xs lg:text-md text-black border-white hover:bg-white hover:text-black rounded-3xl">
                                Live Demo
                            </Button>
                        </a>
                        <a
                            href="https://github.com/armanulhaq/weather-dashboard"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="bg-[#131313] hover:scale-105 transition-transform shadow-md shadow-gray-700 w-full items-center text-white justify-center item-center flex flex-col border border-gray-600 rounded-3xl gap-5 p-5">
                    <img
                        className="w-[90%] rounded-3xl"
                        src="https://cdn.dribbble.com/users/1373613/screenshots/5397385/media/06015c33f475bfd1eac8b2acdf6734a1.gif"
                        alt=""
                    />
                    <h2 className="text-sm lg:text-2xl font-bold">Fusion AI</h2>
                    <div className="w-full gap-5 flex justify-center items-center">
                        <a href="https://askfusion.vercel.app/" target="_blank">
                            <Button className="bg-white w-[150px] h-[50px] px-6 text-xs lg:text-md text-black border-white hover:bg-white hover:text-black rounded-3xl">
                                Live Demo
                            </Button>
                        </a>
                        <a
                            href="https://github.com/armanulhaq/fusion-ai"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent w-[150px] h-[50px] px-6 text-xs lg:text-md text-white border-white hover:bg-white hover:text-black rounded-3xl"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
