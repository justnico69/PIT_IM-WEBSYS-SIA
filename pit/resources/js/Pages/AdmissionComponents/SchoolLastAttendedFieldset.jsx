import React from 'react';

const SchoolLastAttendedFieldset = ({ formData, handleChange }) => (
    <div className="w-full">
        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="schoolLastAttended">School Last Attended:</label>
        <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="schoolLastAttended" name="schoolLastAttended" type="text" placeholder="School Last Attended" required value={formData.schoolLastAttended} onChange={handleChange} />
    </div>
);

export default SchoolLastAttendedFieldset;
