import React, { useState } from 'react';
import dayjs from 'dayjs'; // Import dayjs for date handling
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for react-calendar
import styles from './Calendar.module.css'; // Import your CSS Module
import { Head } from '@inertiajs/react';

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
            <Head title="Registrar Dashboard"/>
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Registrar Dashboard</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Registrar!</p>
                </div>
            </div>
            <div className="grid grid-cols-6 mb-3">
                <div className="mt-10 flex items-center col-span-4">
                    <p className="text-base font-bold text-white">Registrar Panel</p>
                </div>
                <div className="mt-10 flex items-center col-span-1">
                    <p className="text-base font-bold text-white">Calendar</p>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-12 gap-5 mr-8">
                <div className={`row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center ${activeLink === 'new-en-stud' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a
                        href="new-en-stud"
                        className={`text-blue-600 hover:text-blue-900 flex items-center justify-center w-full h-full transition-transform transform ${activeLink === 'new-en-stud' ? 'scale-105' : ''}`}
                        onClick={() => handleLinkClick('new-en-stud')}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Newly Accepted Students</span>
                    </a>
                </div>

                <div className={`row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center ${activeLink === 'distofcor' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                    <a
                        href="distofcor"
                        className={`text-blue-600 hover:text-blue-900 flex items-center justify-center w-full h-full transition-transform transform ${activeLink === 'distofcor' ? 'scale-105' : ''}`}
                        onClick={() => handleLinkClick('distofcor')}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Distribution of COR</span>
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
            </div>
        </div>
    );
};

export default MainContent;
