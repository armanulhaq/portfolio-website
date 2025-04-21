const Skill = ({ skill, skillname }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-4xl">
                <img className="h-10 w-10" src={skill} alt="" />
            </div>
            <h3 className="font-bold text-lg mt-2">{skillname}</h3>
        </div>
    );
};

export default Skill;
