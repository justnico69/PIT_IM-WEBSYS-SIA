import React from 'react';

const EmailContactFieldset = ({ formData, handleChange }) => (
    <>
        <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">Email Address:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="w-full md:w-1/3">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="contactno">Contact Number:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactno" name="contactno" type="text" pattern="[0-9]*" inputMode="numeric" placeholder="Contact Number" required value={formData.contactno} onChange={handleChange} />
        </div>
    </>
);

export default EmailContactFieldset;
