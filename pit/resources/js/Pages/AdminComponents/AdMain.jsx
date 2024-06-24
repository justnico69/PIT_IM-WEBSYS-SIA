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
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Admission Dashboard</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, admin!</p>
                </div>
            </div>
            <div className="grid grid-cols-6 mb-3">
                <div className="mt-10 flex items-center col-span-4">
                    <p className="text-base font-bold text-white">Student Status</p>
                </div>
                <div className="mt-10 flex items-center col-span-1">
                    <p className="text-base font-bold text-white">Calendar</p>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-12 gap-5 mr-8">
                <div className={`row-span-5 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center ${activeLink === 'applicationProcess' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                <a href={window.routes.applicationProcess} className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center" onClick={() => handleLinkClick('applicationProcess')}>
                <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">
                          Student Application <br /> Processing
                        </span>
                    </a>
                </div>

                <div className={`row-span-5 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center ${activeLink === 'acceptedApplicants' ? 'border-4 border-blue-500 transition-transform duration-300 transform translate-y-4' : ''}`}>
                <a href='accepted-applicants' className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center" onClick={() => handleLinkClick('acceptedApplicants')}>
                <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Accepted Applicants</span>
                    </a>
                </div>

                <div className="row-span-5 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[200px]">
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
