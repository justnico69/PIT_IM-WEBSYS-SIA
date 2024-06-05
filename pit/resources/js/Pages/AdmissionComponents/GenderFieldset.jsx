import React from 'react';

const GenderFieldset = ({ formData, handleChange }) => (
    <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
        <label className="block text-gray-500 text-sm font-bold mb-2">Gender:</label>
        <div className="mt-2">
            <input type="radio" className="form-radio h-4 w-4 text-blue-500" name="gender" id="male" value="male" required checked={formData.gender === 'male'} onChange={handleChange} />
            <label htmlFor="male" className="ml-2">Male</label>
        </div>
        <div className="mt-2">
            <input type="radio" className="form-radio h-4 w-4 text-blue-500" name="gender" id="female" value="female" required checked={formData.gender === 'female'} onChange={handleChange} />
            <label htmlFor="female" className="ml-2">Female</label>
        </div>
    </div>
);

export default GenderFieldset;
