import React from 'react';

const EmergencyContactFieldset = ({ formData, handleChange }) => (
    <>
        <div className="mb-0 flex justify-between">
            <label htmlFor="emergencyContact" className="font-bold text-xl">Emergency Contact</label>
        </div>
        <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="emergencyName">Name:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emergencyName" name="emergencyName" type="text" placeholder="Emergency Contact Name" required value={formData.emergencyName} onChange={handleChange} />
            </div>
            <div className="w-1/2">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="relationship">Relationship:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="relationship" name="relationship" type="text" placeholder="Relationship" required value={formData.relationship} onChange={handleChange} />
            </div>
        </div>
        <div className="mb-4 flex justify-between">
            <div className="w-full">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="emergencyContactNumber">Contact Number:</label>
                <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emergencyContactNumber" name="emergencyContactNumber" type="text" pattern="[0-9]*" inputMode="numeric" placeholder="Emergency Contact Number" required value={formData.emergencyContactNumber} onChange={handleChange} />
            </div>
        </div>
    </>
);

export default EmergencyContactFieldset;
