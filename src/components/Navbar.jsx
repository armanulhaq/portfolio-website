const Navbar = () => {
    return (
        <div className="py-3 md:py-5 lg:py-8 flex justify-around text-white border-b border-gray-800">
            <div className="text-3xl font-bold">Arman Ul Haq</div>
            <div className="flex md:gap-4 lg:gap-8 text-xl ">
                <div>About</div>
                <div>Expertise</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
        </div>
    );
};

export default Navbar;
