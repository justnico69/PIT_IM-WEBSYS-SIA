import { useState } from 'react';

function WpHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="sticky top-0 z-50"> {/* Added sticky and top-0 classes */}
            <nav className="bg-gradient-to-b from-blue-500 via-blue-400 to-sky-300">
                <div className="flex items-center justify-between px-5 py-5 w-full border-blue-200">
                    <div className="flex items-center">
                        <div className="font-bold text-white text-xl">
                            Nikol, Nikolai, Nikkolo<span className="text-blue-800"> University</span>
                        </div>
                    </div>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg">
                                {/* Dropdown content */}
                                <a href="/login-page" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</a>
                                <a href="/admission-form" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Apply</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default WpHeader;
