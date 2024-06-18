import React, { useState } from 'react';

const MainContent = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setTimeout(() => setActiveLink(null), 300); // Reset after animation duration
    };

    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Dashboard / Home</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Registrar!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-3">
                <div className="mt-10">
                    <p className="text-base font-bold col-span-2 text-white">Registrar Panel</p>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-12 gap-5 mr-8">
                <div className="row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[328px]">
                    <a
                        href="new-en-stud"
                        className={`text-blue-600 hover:text-blue-900 flex items-center justify-center w-full h-full transition-transform transform ${activeLink === 'payprocess' ? 'scale-105' : ''}`}
                        onClick={() => handleLinkClick('new-en-stud')}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Newly Enrolled Students</span>
                    </a>
                </div>

                <div className="row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[290px]">
                    <a
                        href="distofcor"
                        className={`text-blue-600 hover:text-blue-900 flex items-center justify-center w-full h-full transition-transform transform ${activeLink === 'payprocess' ? 'scale-105' : ''}`}
                        onClick={() => handleLinkClick('distofcor')}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Distribution of CoR</span>
                    </a>
                </div>
                
                
            </div>
        </div>
    );
};

export default MainContent;
