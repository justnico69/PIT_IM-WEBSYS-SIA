import React from 'react';

const BirthdateFieldset = ({ formData, handleChange }) => (
    <>
        <label className="font-bold text-xl">Birthdate</label>
        <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="month">Month:</label>
                <select className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="month" name="month" required value={formData.month} onChange={handleChange}>
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="day">Day:</label>
                <select className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="day" name="day" required value={formData.day} onChange={handleChange}>
                    <option value="">Select Day</option>
                    {[...Array(31).keys()].map(i => (
                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>{i + 1}</option>
                    ))}
                </select>
            </div>
            <div className="w-full md:w-1/3">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="year">Year:</label>
                <select className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="year" name="year" required value={formData.year} onChange={handleChange}>
                    <option value="">Select Year</option>
                    {[...Array(new Date().getFullYear() - 1919).keys()].map(i => (
                        <option key={i + 1920} value={i + 1920}>{i + 1920}</option>
                    ))}
                </select>
            </div>
        </div>
    </>
);

export default BirthdateFieldset;
