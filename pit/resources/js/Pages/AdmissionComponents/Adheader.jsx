import React, { useState, useEffect } from 'react';

const Adheader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHomeClicked, setIsHomeClicked] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 0) {
            // If scrolling down and not at the top
            setShowHeader(false);
        } else {
            // If scrolling up or at the top
            setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleHomeClick = () => {
        setIsHomeClicked(true); // Set the state to true when home button is clicked
        window.location.href = '/';
    };

    return (
        <header className="w-full">
            <nav className={`bg-white fixed top-0 left-0 right-0 z-50 shadow-md flex items-center justify-between transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="ml-6">
                    <button
                        className={`flex items-center text-blue-800 font-bold py-6 px-4 rounded hover:underline ${isHomeClicked ? 'text-lightBlue-500' : 'hover:text-blue-500'}`}
                        onClick={handleHomeClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                    </button>
                </div>
                <div className="text-blue-800 flex-grow text-center">
                    <img
                        src="https://pouch.jumpshare.com/preview/ibZnk8VMgadvzIubs3Zd63NkMbQABMhC7FNrL1lmTj-YnBL_JM-7fChLZocvIzuIaAT1sbsPkq1YXNhLbL4e218rtmGhpEw82bbevfQBekk"
                        alt="Logo"
                        className="h-10 w-10 object-contain mr-2 inline-block"
                    />
                    <span className="text-xl font-bold">
                        NNN College of InfoTech and Computing Admission Form
                    </span>
                </div>
                <div className="mr-6"></div>
            </nav>
        </header>
    );
};

export default Adheader;
