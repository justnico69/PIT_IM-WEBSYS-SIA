import React from 'react';

const AddressFieldset = ({ formData, handleChange }) => (
    <>
        <label className="font-bold text-xl">Address</label>
        <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="streetadd">Street Address:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="streetadd" name="streetadd" type="text" placeholder="Street Address" required value={formData.streetadd} onChange={handleChange} />
        </div>
        <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="city">City/Municipality:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" name="city" type="text" placeholder="City/Municipality" required value={formData.city} onChange={handleChange} />
        </div>
        <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="province">Province:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="province" name="province" type="text" placeholder="Province" required value={formData.province} onChange={handleChange} />
        </div>
        <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="zipcode">Postal/Zipcode:</label>
            <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zipcode" name="zipcode" type="text" placeholder="Postal/Zipcode" required value={formData.zipcode} onChange={handleChange} />
        </div>
    </>
);

export default AddressFieldset;
