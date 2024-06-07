import React, { useState } from 'react';
import corImage from 'C:/Users/ADMIN/Documents/reactor/oten/PIT_IM-WEBSYS-SIA/pit/images/CORAWIT.jpg'; // Import your specific image for COR distribution

const MainContent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handlePopupClick = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    const handleCorClick = () => {
        setPopupContent(
            <img
                src={corImage}
                alt="Distribution of COR"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        );
        setShowPopup(true);
    };

    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 mt-28 mr-14 flex-grow">
                    <p className="text-3xl mt-3 font-bold text-blue-800">Registrar Dashboard</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Registrar Staff!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-3">
                <div className="mt-10">
                    <p className="text-base font-bold text-white">Registrar Panel</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mr-14">
                <div className="bg-white rounded-xl shadow-lg flex items-center justify-start mb-4 w-full h-60">
                    <a
                        href="#"
                        className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePopupClick('Students: Sir Awit');
                        }}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2563eb"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Newly Enrolled Students</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-40">
                        <a
                            href="#"
                            className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                handleCorClick();
                            }}
                        >
                            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd" />
                                    <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                                </svg>
                            </span>
                            <span className="ml-2 text-xl font-semibold">Distribution of COR</span>
                        </a>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-40">
                        <a
                            href="#"
                            className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePopupClick('Subject: Daghan');
                            }}
                        >
                            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2563eb"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                            </span>
                            <span className="ml-2 text-xl font-semibold">Students Records</span>
                        </a>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                        <div>{popupContent}</div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainContent;
