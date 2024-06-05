import React, { useState } from 'react';

import NameFieldset from './NameFieldset';
import BirthdateFieldset from './BirthdateFieldset';
import GenderFieldset from './GenderFieldset';
import NationalityFieldset from './NationalityFieldset';
import EmailFieldset from './EmailFieldset';
import AddressFieldset from './AddressFieldset';
import EmergencyContactFieldset from './EmergencyContactFieldset';
import SchoolLastAttendedFieldset from './SchoolLastAttendedFieldset';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        gender: '',
        nationality: '',
        email: '',
        contactno: '',
        streetadd: '',
        city: '',
        province: '',
        zipcode: '',
        emergencyName: '',
        relationship: '',
        emergencyContactNumber: '',
        schoolLastAttended: '',
    });

    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        try {
            const response = await fetch('/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const result = await response.json();
            if (result.error) {
                setAlertMessage(result.error);
            } else {
                setAlertMessage('Form submitted successfully');
                // Clear form data or redirect as needed
            }
        } catch (error) {
            setAlertMessage(error.message);
        }

        setTimeout(() => setAlertMessage(''), 5000);
    };

    return (
        <div className="container mx-auto p-6" style={{ maxWidth: '1000px', height: '1200px' }}>
            {alertMessage && (
                <div id="alert" className="fixed top-0 left-0 right-0 w-full h-12 bg-blue-500 text-white flex items-center justify-center">
                    <p id="alert-message" className="text-center">{alertMessage}</p>
                </div>
            )}
            <form id="admissionForm" className="bg-white shadow-md rounded px-9 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold font-sans text-center mb-2">Admission Form</h1>
                <div className="w-full border-t border-gray-200 mb-2"></div>
                <NameFieldset formData={formData} handleChange={handleChange} />
                <BirthdateFieldset formData={formData} handleChange={handleChange} />
                <GenderFieldset formData={formData} handleChange={handleChange} />
                <NationalityFieldset formData={formData} handleChange={handleChange} />
                <EmailFieldset formData={formData} handleChange={handleChange} />
                <AddressFieldset formData={formData} handleChange={handleChange} />
                <EmergencyContactFieldset formData={formData} handleChange={handleChange} />
                <SchoolLastAttendedFieldset formData={formData} handleChange={handleChange} />
                <div className="flex items-center justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;
