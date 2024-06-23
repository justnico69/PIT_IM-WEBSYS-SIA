import React, { useState } from 'react';
import dayjs from 'dayjs'; // Import dayjs for date handling
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for react-calendar
import styles from './Calendar.module.css'; // Import your CSS Module

const MainContent = () => {
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
    
    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Student Dashboard </p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Student!</p>
                </div>
            </div>
            <div className="grid grid-cols-6 mb-3">
                <div className="mt-10 flex items-center col-span-4">
                    <p className="text-base font-bold text-white">Student Panel</p>
                </div>
                <div className="mt-10 flex items-center col-span-1">
                    <p className="text-base font-bold text-white">Calendar</p>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-12 gap-5 mr-8">
            <div className={`row-span-3 col-span-4 bg-white rounded-xl shadow-lg flex items-center justify-center ${activeLink === 'enrollment-process' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                <a href="enrollment-process" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full"
                    onClick={() => handleLinkClick('enrollment-process')}>
                    <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                    </span>
                    <span className="ml-2 text-2xl font-semibold">Enrollment</span>
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

                <div className={`row-span-3 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px] ${activeLink === 'certofreg' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a href="certofreg" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full"
                        onClick={() => handleLinkClick('certofreg')}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Certificate of Registration</span>
                    </a>
                </div>

                <div className={`row-span-3 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px] ${activeLink === 'program-details' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a href="program-details" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full"
                        onClick={() => handleLinkClick('program-details')}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd" />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Program Details</span>
                    </a>
                </div>

                <div className={`row-span-3 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px] ${activeLink === 'shiftreq' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a href="shiftreq" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full"
                        onClick={() => handleLinkClick('shiftreq')}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Shift Request</span>
                    </a>
                </div>

                <div className={`row-span-3 col-span-4 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[150px] ${activeLink === 'assess-billing' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a href="assess-billing" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full"
                        onClick={() => handleLinkClick('assess-billing')}>
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                                <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Assessment and Billing</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default MainContent;
