import React, { useState } from 'react';

function MainContent() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'Nicole Camara', program: 'BSIT', yearLevel: '1st Year', semester: '1st Semester', paymentStatus: 'Pending' },
    { id: 2, name: 'Andreanne Monique Gorres', program: 'BSTCM', yearLevel: '2nd Year', semester: '2nd Semester', paymentStatus: 'Paid' },
    { id: 3, name: 'Aljo Nicolo Andina', program: 'BSCS', yearLevel: '3rd Year', semester: '1st Semester', paymentStatus: 'Pending' },
    { id: 4, name: 'John Patrick Awit', program: 'BSDS', yearLevel: '4th Year', semester: '2nd Semester', paymentStatus: 'Pending' },
    { id: 5, name: 'Judison Claude Nunez', program: 'BSDS', yearLevel: '1st Year', semester: '2nd Semester', paymentStatus: 'Paid' },
    // Add more students as needed
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null); // To track the selected student for popup
  const [showSecondModal, setShowSecondModal] = useState(false); // To track which modal to show

  // Define the image URL for the modal header
  const modalHeaderImageUrl = 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t1.15752-9/448275158_1119524096005342_6942043764889881186_n.png?stp=dst-png_s2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeExfyCkz4NdjGs-z4WYST_SVqjqRu8OA1NWqOpG7w4DUzsUaJEelQttppKYoVgEoHtiOrk4MZhZP_sqOBwUIVYl&_nc_ohc=BMePNg2UaBsQ7kNvgHf7KMj&_nc_ht=scontent.fcgy2-3.fna&cb_e2o_trans=t&oh=03_Q7cD1QHRhoeRODbn8zrEcfU-AkOujwg6SQBk9YCbOWwm-cbF6w&oe=66976CB3';

  // Function to filter students based on program and search term
  const filteredStudents = students.filter(student =>
    (selectedProgram === '' || student.program === selectedProgram) &&
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle program filter change
  const handleProgramFilter = (program) => {
    setSelectedProgram(program);
  };

  // Function to handle clicking on student name (to show popup)
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowSecondModal(false); // Show the first modal initially
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedStudent(null);
    setShowSecondModal(false);
  };

  // Function to handle "Next" button click
  const handleNextClick = () => {
    setShowSecondModal(true); // Show the second modal
  };

  // UI Design
  return (
    <main className="w-full ml-5">
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-bold text-blue-800">Payment Processing</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Student Payment Management</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Student Payment Processing</p>
        </div>
      </div>

      <div className="bg-white p-5 mb-5 shadow overflow-hidden sm:rounded-xl mr-8 px-3">
        <p className="block text-gray-500 text-base font-bold mt-4 ml-4">Search and Filter</p>
        <div className="grid grid-cols-3 gap-3 p-4">
          <input
            type="text"
            placeholder="Search by student name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="rounded-md col-span-3 px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          <table className="col-span-3 mb-5 table-fixed">
            <thead>
              <tr>
                <th className="col-span-1 px-4 py-2 text-left">Student ID</th>
                <th className="col-span-1 px-4 py-2 text-left">Student Name</th>
                <th className="col-span-2 px-4 py-2 text-left">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index} onClick={() => handleStudentClick(student)} className="cursor-pointer hover:bg-gray-200">
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup/Modal for displaying student details */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-lg w-full relative">
            {!showSecondModal ? (
              <>
                {/* First Modal - Student Information */}
                <div className="absolute top-0 left-0 right-0 h-[140px]">
                  <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="relative px-4 py-5 sm:px-6 mt-36">
                  <h3 className="text-lg leading-6 font-medium text-black">Student Information</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Student ID</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.id}</dd>
                    </div>
                    <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.name}</dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Program</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.program}</dd>
                    </div>
                    <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Year Level</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.yearLevel}</dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Semester</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.semester}</dd>
                    </div>
                    <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Payment Status</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.paymentStatus}</dd>
                    </div>
                  </dl>
                  {/* Next button */}
                  <button
                    onClick={handleNextClick}
                    className="mx-4 mb-4 mt-5 block text-right"
                  >
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Next
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Second Modal - Tuition Details */}
                <div className="absolute top-0 left-0 right-0 h-[140px]">
                  <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="relative px-4 py-5 sm:px-6 mt-36">
                  <h3 className="text-lg leading-6 font-medium text-black">Tuition Details</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Tuition Fee</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">PHP 10, 000.00</dd>
                    </div>
                    <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Registration Fee</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">PHP 3, 200.00</dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Library Fee</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">PHP 1, 000.00</dd>
                    </div>
                    <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Miscellaneous Fee</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">PHP 1, 150.00</dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-bold text-gray-500">Total</dt>
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">PHP 15, 350.00</dd>
                    </div>
                    {/* Add additional fields as necessary */}
                  </dl>
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="mx-4 mb-4 mt-5 block text-right"
                  >
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Close
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </main>
  );
}

export default MainContent;

