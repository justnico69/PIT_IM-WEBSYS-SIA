import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import React from 'react';
import axios from 'axios';
import AlSidebar from './AlSidebar'; // Importing the sidebar component

Modal.setAppElement('#root'); // Set the root element for accessibility

const handleLogout = async (e) => {
  e.preventDefault();

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  try {
    await axios.post('/logout', { _token: csrfToken });
    window.location.href = '/login'; // Redirect to the login page
  } catch (error) {
    console.error('An error occurred while logging out:', error);
  }
};

function MainContent() {
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

  return (
    <div className="flex h-screen"> {/* Use h-screen to make the parent div take full screen height */}
      <AlSidebar /> {/* Sidebar component */}

      <div className="flex-grow ml-5 h-full overflow-hidden mt-5"> {/* Ensure flex-grow and h-full are applied */}
        <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[120px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Accepted Applicants</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">See the list of accepted students here!</p>
                </div>
        </div>

        <div className="grid grid-cols-3">
          {/* Student Status */}
          <div className="mt-10 ml-2">
            <p className="text-xl font-extrabold text-white">List of Accepted Applicants</p>
          </div>
        </div>

        <main className="container mx-auto py-2">
          <style>
            {`
              .modal {
                position: absolute;
                top: 50%;
                left: 50%;
                right: auto;
                bottom: auto;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                max-width: 500px;
                width: 100%;
              }

              .overlay {
                background-color: rgba(0, 0, 0, 0.75);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
              }
            `}
          </style>

          <div className="bg-white border-2 shadow overflow-hidden sm:rounded-lg ml-0 mr-10">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-bold text-gray-900">Names of Applicants</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {acceptedApplicants.map((applicant) => (
                  <div key={applicant.id} className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-Poppins font-large text-gray-500">
                      {applicant.firstName} {applicant.lastName}
                    </dt>
                    <button onClick={() => handleStudentClick(applicant)} className="text-blue-500 hover:underline ml-2 focus:outline-none">View Details</button>
                  </div>
                ))}
              </dl>
            </div>
          </div>

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
                  <h3 className="text-lg leading-6 font-bold font-poppins text-black">Applicant Information</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Student Number</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.student_number}</dd>
                    </div>
                    <div className="bg-gray-200  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                        {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}
                      </dd>
                    </div>
                    <div className="bg-gray-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Email</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.email}</dd>
                    </div>
                    <div className="bg-gray-200  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Contact Number</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.contactno}</dd>
                    </div>
                    <div className="bg-gray-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Address</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                        {selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}
                      </dd>
                    </div>
                    <div className="bg-gray-200  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Emergency Contact</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                        {selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}
                      </dd>
                    </div>
                    <div className="bg-gray-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">School Last Attended</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
                    </div>
                  </dl>
                  {/* Close button */}
                  <button onClick={closeModal} className="text-white hover:underline mx-4 mb-4 px-5 py-1 mt-5 bg-red-500 block text-right">
                    Close
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </main>
      </div>
    </div>
  );
}

export default MainContent;
