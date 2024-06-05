import React from 'react';

const NationalityFieldset = ({ formData, handleChange }) => (
    <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="nationality">Nationality:</label>
        <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nationality" name="nationality" type="text" placeholder="Nationality" required value={formData.nationality} onChange={handleChange} />
    </div>
);

export default NationalityFieldset;
