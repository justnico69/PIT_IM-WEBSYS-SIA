import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

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
    <main className="container mx-auto py-10">
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

      <h1 className="text-white font-poppins text-3xl font-extrabold mb-8 ml-10">Accepted Applicants</h1>
      <div className="bg-white border-2 shadow overflow-hidden sm:rounded-lg ml-10 mr-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-bold text-gray-900">Names of the Accepted Applicants</h3>
        </div>
        <div className="border-t border-gray-200 ">
          <dl>
            {acceptedApplicants.map((applicant) => (
              <div key={applicant.id} className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
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
              <h3 className="text-lg leading-6 font-medium text-black">Applicant Information</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Student Number</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.student_number}</dd>
                </div>
                <div className="bg-gray-200  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-medium text-large text-black sm:mt-0 sm:col-span-2">
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
              <button onClick={closeModal} className="text-red-500 hover:underline mx-4 mb-4 block text-right">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default MainContent;
