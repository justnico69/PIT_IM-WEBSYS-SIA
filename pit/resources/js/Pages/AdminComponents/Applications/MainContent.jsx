import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function MainContent() {
  const [studentNames, setStudentNames] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/applicants')
      .then((response) => response.json())
      .then((data) => setStudentNames(data));
  }, []);

  const handleStudentClick = (id) => {
    fetch(`http://localhost:8000/api/applicants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedStudent(data);
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptApplicant = () => {
    // Add logic to accept applicant
    // For now, let's just close the modal
    closeModal();
  };

  const rejectApplicant = (id) => {
    if (window.confirm("Are you sure you want to reject this applicant?")) {
      fetch(`http://localhost:8000/api/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          setStudentNames(studentNames.filter(student => student.id !== id));
          closeModal();
          
        });
        
    }
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
      <h1 className="text-3xl font-bold mb-8 ml-10">Ongoing Applications</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg ml-10 mr-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Applicants</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {studentNames.map((student, index) => (
              <div key={index} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  <button onClick={() => handleStudentClick(student.id)} className="text-blue-500 hover:underline">
                    {student.name}
                  </button>
                </dt>
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
              <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
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
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Emergency Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">School Last Attended</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
                </div>
              </dl>
           
              {/* Accept and reject buttons */}
              <div className="flex justify-end px-4 py-3 sm:px-6">
                <button onClick={acceptApplicant} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Accept
                </button>
                <button onClick={() => rejectApplicant(selectedStudent.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              </div>
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
