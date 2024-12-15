const Navbar = () => {
    return (
        <div className="px-5 lg:px-0 py-3 md:py-5 lg:py-10 flex lg:justify-around items-center  text-white h-[8vh] lg:h-[10vh]  border-b border-gray-600">
            <div className="text-md lg:text-3xl font-bold">Arman Ul Haq</div>
            <div className="hidden lg:flex md:gap-4 lg:gap-8 text-xl ">
                <div>About</div>
                <div>Expertise</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
        </div>
    );
};

export default Navbar;
