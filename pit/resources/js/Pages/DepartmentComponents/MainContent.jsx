import React, { useState } from 'react';
import axios from 'axios';

const MainContent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [applicants, setApplicants] = useState([]);
    const [expandedDetails, setExpandedDetails] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/applicantshow');
            setApplicants(response.data); 
            setShowPopup(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setExpandedDetails(null); 
    };

    const toggleDetails = (applicantId) => {
        if (expandedDetails === applicantId) {
            setExpandedDetails(null);
        } else {
            setExpandedDetails(applicantId); 
        }
    };

    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-10 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Dashboard / Home</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Department!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 mb-3">
                <div className="mt-10">
                    <p className="text-lg font-bold text-white">College of Information Technology and Computing Department</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 grid-rows-4">
                <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center w-auto">
                    <a href="scm-department" className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center" onClick={fetchData}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                        </span>
                        <span className="ml-4 text-2xl font-semibold">Student Course <br/>Management</span>
                    </a>
                </div>
                <div className="h-[250px] col-span-1 bg-white rounded-xl shadow-lg flex items-center justify-center w-auto mr-30">
                    <a href="it-department" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Information Technology</span>
                    </a>
                </div>
                <div className="h-[250px] col-span-1 bg-white rounded-xl shadow-lg flex items-center justify-center w-auto mr-10">
                    <a href="tcm-department" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Technology Communications Management</span>
                    </a>
                </div>
                <div className="col-start-2 row-start-2 bg-white rounded-xl shadow-lg flex items-center justify-center h-[250px]">
                    <a href="ds-department" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Data Science</span>
                    </a>
                </div>
                <div className="h-[250px] col-span-1 bg-white rounded-xl shadow-lg flex items-center justify-center w-auto mr-10 row-3 col-end-4">
                <a href="cs-department" className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                    <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                                <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Computer Science</span>
                    </a>
                </div>
            </div>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Applicant Details</h2>
                        <ul>
                            {applicants.map(applicant => (
                                <li key={applicant.id}>
                                    <p>
                                        {applicant.firstName}
                                        {' '}
                                        <a
                                            href="#"
                                            className="text-blue-500 hover:underline"
                                            onClick={() => toggleDetails(applicant.id)}
                                        >
                                            View Details
                                        </a>
                                    </p>
                                    {expandedDetails === applicant.id && (
                                        <>
                                            <p>Middle Name: {applicant.middleName}</p>
                                            <p>Last Name: {applicant.lastName}</p>
                                            <p>Gender: {applicant.gender}</p>
                                            <p>Email: {applicant.email}</p>
                                            {/*if need dunggan ang view details awata lang ang format sa taas*/}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainContent;
