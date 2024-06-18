import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import StudSidebar from './StudSidebar';


Modal.setAppElement('#root'); // Set the root element for accessibility


function MainContent() {
  const [studentNames, setStudentNames] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudentNumber, setNewStudentNumber] = useState(null); // State to hold the new student number


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


  const acceptApplicant = (id, email) => {
    if (window.confirm("Do you confirm this?")) {
      fetch(`http://localhost:8000/api/applicant/accept/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudentNames(studentNames.filter(student => student.id !== id));
        closeModal();
        alert(data.message); // Display the success message
        setNewStudentNumber(data.newStudentNumber); // Set the new student number


        // Send acceptance email
        fetch(`http://localhost:8000/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, new_student_number: data.newStudentNumber }), // Pass new_student_number here
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message); // Display success message for email sending
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  };


  const rejectApplicant = (id, email) => {
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
 
        // Send rejection email
        fetch(`http://localhost:8000/api/send-rejection-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }), // Pass the email here
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message); // Display success message for email sending
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
      });
    }
  };
 


  return (
  <div className="flex h-screen"> {/* Use h-screen to make the parent div take full screen height */}
      <StudSidebar /> {/* Sidebar component */}


      <div className="flex-grow ml-5 h-full overflow-hidden mt-5"> {/* Ensure flex-grow and h-full are applied */}
        <div className="flex flex-row">
          <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[120px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Student Application Processing</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">See the list of pending applicants here!</p>
                </div>
        </div>
 
          <div className="grid grid-cols-3">
          {/* Student Status */}
          <div className="mt-10 ml-2">
            <p className="text-xl font-extrabold text-white">List of Pending Applicants</p>
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


      <div className="bg-white border-2 shadow overflow-hidden sm:rounded-lg ml-1 mr-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-bold text-gray-900">Name of Applicants</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {studentNames.map((student) => (
              <div key={student.id} className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-Poppins font-large text-gray-500">
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
              <h3 className="text-lg leading-6 font-bold font-poppins text-black">Applicant Information</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                    {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}
                  </dd>
                </div>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Email</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.email}</dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Contact Number</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.contactno}</dd>
                </div>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Address</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                    {selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}
                  </dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Emergency Contact</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">
                    {selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}
                  </dd>
                </div>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">School Last Attended</dt>
                  <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
                </div>
              </dl>


              {/* Accept and reject buttons */}
              <div className="flex justify-end px-4 py-3 sm:px-6 mt-2">
                <button onClick={() => acceptApplicant(selectedStudent.id, selectedStudent.email)} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
  </div>
  </div>
  );
}


export default MainContent;


