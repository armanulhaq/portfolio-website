import Project from "./Project";
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
                <Project
                    name="Sushimanoo"
                    gif="https://cdn.dribbble.com/userupload/20805250/file/original-2dcadf6a2c0741f384255b4e534271b3.gif"
                    demo="https://sushi-ruby-seven.vercel.app/"
                    github="https://github.com/armanulhaq/sushi"
                />
                <Project
                    name="Go Fusion"
                    gif="https://cdn.dribbble.com/users/795597/screenshots/3569676/media/9a9bf9c2a18364eb350b4a55ca63e91a.gif"
                    demo="https://go-fusion.vercel.app/"
                    github="https://github.com/armanulhaq/go-fusion"
                />
                <Project
                    name="Veritas"
                    gif="https://cdn.dribbble.com/userupload/21523986/file/original-5a1e5d2c9641462168d72e070d817d57.gif"
                    demo="https://verifywithveritas.vercel.app/"
                    github="https://github.com/armanulhaq/veritas"
                />
                <Project
                    name="Alcami"
                    gif="https://cdn.dribbble.com/userupload/24898076/file/original-0e6fdb1ed026c5d0c908737a6dbfdb42.gif"
                    demo="https://cube-delta-ten.vercel.app/"
                    github="https://github.com/armanulhaq/cube"
                />
                <Project
                    name="Fusion Store"
                    gif="https://cdn.dribbble.com/users/97870/screenshots/1425320/media/676d206f27d9808d168887791efc4b5e.gif"
                    demo="https://fusion-store.vercel.app/"
                    github="https://github.com/armanulhaq/fusion-store"
                />
                <Project
                    name="Motion Detection"
                    gif="https://cdn.dribbble.com/users/224485/screenshots/1932553/media/9ae59c34effbc06ac79c8e8a97d87461.gif"
                    github="https://github.com/armanulhaq/camera-alert"
                />
                <Project
                    name="Fusion News"
                    gif="https://cdn.dribbble.com/users/41854/screenshots/3300055/media/d9de719e83c7dea53ed3cc1b7b55ff8a.gif"
                    github="https://github.com/armanulhaq/fusion-news"
                />
                <Project
                    name="University Website"
                    gif="https://cdn.dribbble.com/users/808936/screenshots/3232987/media/fb181b09abf9419fe9200207b1c35a47.gif"
                    github="https://github.com/armanulhaq/fusion-university"
                    demo="https://fusionuniversity.vercel.app/"
                />
                <Project
                    name="Weather Forecast"
                    gif="https://cdn.dribbble.com/users/28455/screenshots/1389791/media/bd9f8d16f8a3027d4dccb852d44b37d6.gif"
                    github="https://github.com/armanulhaq/weather-dashboard"
                    demo="https://armanulhaq-weather-dashboard-main-gxdudm.streamlit.app/"
                />
                <Project
                    name="Fusion AI"
                    gif="https://cdn.dribbble.com/users/1373613/screenshots/5397385/media/06015c33f475bfd1eac8b2acdf6734a1.gif"
                    github="https://github.com/armanulhaq/fusion-ai"
                    demo="https://askfusion.vercel.app/"
                />
            </div>
        </div>
    );
};

export default Projects;
