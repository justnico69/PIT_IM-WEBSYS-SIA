import { useState } from 'react';

import AddressFieldset from './AddressFieldset';
import BirthdateFieldset from './BirthdateFieldset';
import EmailFieldset from './EmailFieldset';
import EmergencyContactFieldset from './EmergencyContactFieldset';
import GenderFieldset from './GenderFieldset';
import NameFieldset from './NameFieldset';
import NationalityFieldset from './NationalityFieldset';
import SchoolLastAttendedFieldset from './SchoolLastAttendedFieldset';
import ThankYouPage from './ThankYouPage';
import Adheader from './Adheader';


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
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                setIsSubmitted(true);
            }
        } catch (error) {
            setAlertMessage(error.message);
        }

        setTimeout(() => setAlertMessage(''), 5000);
    };

    
    if (isSubmitted) {
        return <ThankYouPage />;
    }

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <div className="container mx-auto p-6" style={{ maxWidth: '1000px', height: '1200px' }}>
                    {alertMessage && (
                        <div id="alert" className="fixed top-0 left-0 right-0 w-full h-12 bg-blue-500 text-white flex items-center justify-center">
                            <p id="alert-message" className="text-center">{alertMessage}</p>
                        </div>
                    )}
                    <Adheader/>
                    <form id="admissionForm" className="bg-white/60 border-2 shadow-md rounded px-9 pt-6 pb-8 mb-2 mt-20" onSubmit={handleSubmit}>
                        <NameFieldset formData={formData} handleChange={handleChange} />
                        <BirthdateFieldset formData={formData} handleChange={handleChange} />
                        <GenderFieldset formData={formData} handleChange={handleChange} />
                        <NationalityFieldset formData={formData} handleChange={handleChange} />
                        <EmailFieldset formData={formData} handleChange={handleChange} />
                        <AddressFieldset formData={formData} handleChange={handleChange} />
                        <EmergencyContactFieldset formData={formData} handleChange={handleChange} />
                        <SchoolLastAttendedFieldset formData={formData} handleChange={handleChange} />
                        <div className="flex items-center justify-end">
                            <button className="bg-blue-500 hover:bg-blue-800 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute inset-0 bg-no-repeat bg-cover h-[1400px]" style={{ backgroundImage: 'url(https://imagescdn.homes.com/i2/VXPLK43-4n9ZpgiohBL-_4ogTCPg05VtC_CeB50fugQ/111/washington-high-school-of-information-technology-milwaukee-wi-8-schoolphoto.jpg?p=1)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
                    <div className="absolute inset-0 bg-no-repeat bg-cover h-[1400px]" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.1' }}></div>
                    <div className="absolute inset-0 bg-no-repeat bg-cover h-[1400px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.6' }}></div>
        </div>
    );
};

export default AdmissionForm;
