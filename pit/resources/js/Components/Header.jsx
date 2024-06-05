
const Header = () => {
    return (
        <header>
            <nav className="fixed bg-white border-b-2 border-blue-100 flex w-full z-10 items-center justify-between ">
                <div className="text-blue-800 px-10 py-1 z-10 w-full border-blue-200">
                    <div className="flex items-center justify-between py-2 text-5x1">
                        <div className="font-bold text-blue-600 text-xl">NNN<span className="text-blue-800">University</span></div>
                        <div className="flex items-center text-gray-500">
                            <button className="material-icons-outlined p-2 text-blue-800" style={{fontSize: "30px"}}>search</button>
                            <button className="material-icons-outlined p-2 text-blue-800" style={{fontSize: "30px"}}>notifications</button>
                        </div>
                    </div>
                </nav>
        </header>
    );
};

export default Header;
