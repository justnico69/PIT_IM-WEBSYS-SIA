import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import corImage from 'C:/Users/ADMIN/Documents/reactor/oten/PIT_IM-WEBSYS-SIA/pit/images/CORAWIT.jpg'; // Import your specific image for COR distribution

Modal.setAppElement('#root'); // Set the root element for accessibility

const MainContent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [acceptedApplicants, setAcceptedApplicants] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch accepted applicants
        fetch('http://localhost:8000/api/applicantshow')
            .then((response) => response.json())
            .then((data) => setAcceptedApplicants(data));
    }, []);

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePopupClick = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    const handleCorClick = () => {
        setPopupContent(
            <img
                src={corImage}
                alt="Distribution of COR"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        );
        setShowPopup(true);
    };

    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-bold text-blue-800">Registrar Dashboard</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Registrar Staff!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-3">
                <div className="mt-10">
                    <p className="text-base font-bold text-white">Registrar Panel</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mr-14">
                <div className="bg-black rounded-xl shadow-lg flex items-center justify-start mb-4 w-full h-60">
                    <a
                        href="#"
                        className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePopupClick(
                                <div>
                                    {acceptedApplicants.map((applicant) => (
                                        <div key={applicant.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                {applicant.firstName} {applicant.lastName}
                                            </dt>
                                            <button onClick={() => handleStudentClick(applicant)} className="text-blue-500 hover:underline ml-2 focus:outline-none">View Details</button>
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    >
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                            {/* SVG code for the icon */}
                            {/* Insert SVG code here */}
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Newly Enrolled Students</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-4 mr-14">
                    <div className="bg-black rounded-xl shadow-lg flex items-center justify-start mb-4 w-full h-60">
                        <a
                            href="#"
                            className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                handleCorClick();
                            }}
                        >
                            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                                {/* SVG code for the icon */}
                                {/* Insert SVG code here */}
                            </span>
                            <span className="ml-2 text-2xl font-semibold">Distribution of COR</span>
                        </a>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                        <div>{popupContent}</div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Student Information"
                className="modal"
                overlayClassName="overlay"
            >
                {selectedStudent && (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Student Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.student_number}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.email}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Contact Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.contactno}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Emergency Contact</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">School Last Attended</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
                                </div>
                            </dl>
                            <button onClick={closeModal} className="text-red-500 hover:underline mx-4 mb-4 block text-right">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MainContent;
