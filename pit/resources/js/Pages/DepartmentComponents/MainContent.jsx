import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; // Import dayjs for date handling
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for react-calendar
import styles from './Calendar.module.css'; // Import your CSS Module

const MainContent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [applicants, setApplicants] = useState([]);
    const [expandedDetails, setExpandedDetails] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [selectedDate, setSelectedDate] = useState(dayjs()); // Initialize with dayjs object

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setTimeout(() => setActiveLink(null), 300); // Reset after animation duration
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(dayjs(newDate)); // Convert newDate to dayjs object
    };

    // Function to check if a date is selected
    const isSelectedDate = (date) => {
        return selectedDate.isSame(date, 'day'); // Check if the date is the same as selectedDate
    };

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
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Department Dashboard</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Department!</p>
                </div>
            </div>
            <div className="grid grid-cols-6 mb-3">
                <div className="mt-10 flex items-center col-span-4">
                    <p className="text-base font-bold text-white">College of Information Technology and Computing</p>
                </div>
                <div className="mt-10 flex items-center col-span-1">
                    <p className="text-base font-bold text-white">Calendar</p>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-12 gap-5 mr-8">
                <div className="row-span-2 col-span-4 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="scm-department" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full" onClick={fetchData}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Student Course Management</span>
                    </a>
                </div>

                <div className="row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[290px]">
                    {/* MUI DateCalendar component */}
                    <div className={`${styles.customCalendar} bg-white rounded-xl flex flex-col items-center justify-center min-h-[290px]`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                onChange={handleDateChange}
                                value={selectedDate} // Pass dayjs object
                                className="border rounded-xl border-white p-5 mb-2 mt-10"
                                style={{ width: '100%' }}
                                renderDay={(date, _value, DayComponentProps) => (
                                    <button
                                        {...DayComponentProps}
                                        className={`w-full text-sm font-medium p-2 rounded-full focus:outline-none ${isSelectedDate(date) ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                                    >
                                        {date.date()}
                                    </button>
                                )}
                            />
                        </LocalizationProvider>

                        <p className="mt-5 mb-5 w-60 py-[10px] flex items-center justify-center text-sm font-semibold p-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-700 text-white">
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2">{`${selectedDate.format('MMMM DD, YYYY')}`}</span>
                        </p>
                    </div>
                </div>

                <div className="row-span-2 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="it-department" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Information Technology</span>
                    </a>
                </div>
                <div className="row-span-2 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="tcm-department" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Technology Communications <br/>Management</span>
                    </a>
                </div>
                <div className="row-span-2 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="ds-department" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                            <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                            <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                            <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-xl font-semibold">Data Science</span>
                    </a>
                </div>
                <div className="row-span-2 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[150px]">
                    <a href="cs-department" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M16.5 7.5h-9v9h9v-9Z" />
                            <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
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