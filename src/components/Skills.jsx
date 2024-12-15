import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import shadcn from "../assets/shadcn.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import bootstrap from "../assets/bootstrap.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import figma from "../assets/bootstrap.png";
import python from "../assets/python.png";

const Skills = () => {
    return (
        <div className="py-20 border-b border-gray-600">
            <div className="flex-col mt-10 justify-center item-center">
                <div className="flex justify-around text-white text-sm lg:text-lg">
                    Explore my
                </div>
                <div className="flex justify-around text-white text-4xl mt-2  lg:text-6xl font-bold ">
                    Skills
                </div>
            </div>
            <div></div>
            <div className="my-4 lg:my-10 h-[90vh] lg:h-[60vh] p-4 lg:p-10 grid grid-cols-3 lg:grid-cols-4 flex-wrap gap-2 lg:gap-5 items-center justify-center border border-gray-600 rounded-3xl mx-8 lg:mx-60 bg-black text-white">
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={html} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">HTML</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={css} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">CSS</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={js} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">JavaScript</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={bootstrap} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Bootstrap</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={java} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Java</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={mysql} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">MySQL</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={react} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">React.js</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={shadcn} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">shadcn/ui</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={tailwind} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Tailwind</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={git} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">GIT</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={figma} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Figma</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl">
                        <img className="h-10 w-10" src={python} alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Python</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;