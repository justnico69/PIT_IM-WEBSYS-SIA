import React from 'react';

const NameFieldset = ({ formData, handleChange }) => (
    <>
        <label className="font-bold text-xl mb-4">Name</label>
        <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="firstName">First Name:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" name="firstName" type="text" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="middleName">Middle Name:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="middleName" name="middleName" type="text" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/3">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="lastName">Last Name:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" name="lastName" type="text" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
            </div>
        </div>
    </>
);

export default NameFieldset;
