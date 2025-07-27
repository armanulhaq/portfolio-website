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
                    name="ReLeaf"
                    gif="https://cdn.dribbble.com/userupload/29805678/file/original-82f5c5c9f3f89350d921336df6d5e552.gif"
                    demo="https://releaf.vercel.app/"
                    github="https://github.com/armanulhaq/releaf"
                />
                <Project
                    name="Zapp"
                    gif="https://cdn.dribbble.com/userupload/40727666/file/original-37f9059c9fccc73bdc11ded550d5c3c7.gif"
                    demo="https://zapp-lime.vercel.app/"
                    github="https://github.com/armanulhaq/Zapp"
                />
                <Project
                    name="Sahyog"
                    gif="https://cdn.dribbble.com/userupload/39295694/file/original-f47f421d3bf08ed2057d0152dc6f460c.gif"
                    demo="https://donate-with-sahyog.vercel.app/"
                    github="https://github.com/armanulhaq/sahyog"
                />
                <Project
                    name="LitPick"
                    gif="https://cdn.dribbble.com/userupload/23941634/file/original-674353314a72b96389e4ccc6a0a47021.gif"
                    demo="https://litpickai.vercel.app/"
                    github="https://github.com/armanulhaq/litpickai"
                />
                <Project
                    name="Eat Fusion"
                    gif="https://cdn.dribbble.com/userupload/21537816/file/original-d1df206da258b0eccc1049c7ea44b29d.gif"
                    demo="https://eat-fusion.vercel.app/"
                    github="https://github.com/armanulhaq/eat-fusion"
                />
                <Project
                    name="Sushimanoo"
                    gif="https://cdn.dribbble.com/userupload/20805250/file/original-2dcadf6a2c0741f384255b4e534271b3.gif"
                    demo="https://sushi-ruby-seven.vercel.app/"
                    github="https://github.com/armanulhaq/sushi"
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
            </div>
        </div>
    );
};

export default Projects;
