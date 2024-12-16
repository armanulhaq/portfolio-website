const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="px-5 lg:px-0 py-3 md:py-5 lg:py-10 flex lg:justify-around items-center  text-white h-[8vh] lg:h-[10vh]  border-b border-gray-600">
            <div className="text-md lg:text-3xl font-bold">Arman Ul Haq</div>
            <div className="hidden lg:flex md:gap-4 lg:gap-8 text-xl ">
                <div
                    onClick={() => scrollToSection("about")}
                    className="cursor-pointer"
                >
                    About
                </div>
                <div
                    onClick={() => scrollToSection("skills")}
                    className="cursor-pointer"
                >
                    Skills
                </div>
                <div
                    onClick={() => scrollToSection("projects")}
                    className="cursor-pointer"
                >
                    Projects
                </div>
                <div
                    onClick={() => scrollToSection("contact")}
                    className="cursor-pointer"
                >
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Navbar;
