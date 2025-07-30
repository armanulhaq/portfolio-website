import js from "../assets/js.png";
import react from "../assets/react.png";
import shadcn from "../assets/shadcn.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import bootstrap from "../assets/bootstrap.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import python from "../assets/python.png";
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import mongoDB from "../assets/mongoDB.png";
import prisma from "../assets/prisma.svg";
import supabase from "../assets/supabase.png";
import Skill from "./Skill";

const Skills = () => {
    return (
        <div id="skills" className="py-20 border-b border-gray-600">
            <div className="flex-col mt-10 justify-center item-center">
                <div className="flex justify-around text-white text-sm lg:text-lg">
                    Explore my
                </div>
                <div className="flex justify-around text-white text-4xl mt-2  lg:text-6xl font-bold ">
                    Skills
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center h-full">
                <div className="w-[90%] lg:ml-[130px] lg:w-[60%] my-4 lg:my-10 h-[60vh]  lg:p-10 grid grid-cols-3 lg:grid-cols-4 flex-wrap gap-2 lg:gap-5 items-center justify-center border border-gray-600 rounded-3xl  bg-black text-white shadow-md shadow-gray-700">
                    <Skill skill={js} skillname={"JavaScript"} />
                    <Skill skill={react} skillname={"React"} />
                    <Skill skill={nodejs} skillname={"Node JS"} />
                    <Skill skill={git} skillname={"Git"} />
                    <Skill skill={express} skillname={"Express JS"} />
                    <Skill skill={mongoDB} skillname={"Mongo DB"} />
                    <Skill skill={mysql} skillname={"MySQL"} />
                    <Skill skill={tailwind} skillname={"Tailwind"} />
                    <Skill skill={python} skillname={"Python"} />
                    <Skill skill={supabase} skillname={"Supabase"} />
                    <Skill skill={prisma} skillname={"Prisma"} />
                    <Skill skill={bootstrap} skillname={"Bootstrap"} />
                    <Skill skill={shadcn} skillname={"shadcn"} />
                    <Skill skill={java} skillname={"Java"} />
                    <Skill skill={figma} skillname={"Figma"} />
                </div>
                <div className="w-[40%] lg:flex items-end justify-end mr-[130px] hidden">
                    <img
                        src="https://cdn.dribbble.com/users/4055494/screenshots/15215756/media/d2b66c4ca0192aa26d103448b3d1518b.gif"
                        alt=""
                        className="rounded-3xl h-[400px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
