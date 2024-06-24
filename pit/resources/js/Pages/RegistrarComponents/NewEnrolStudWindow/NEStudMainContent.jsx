import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MainContent = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedYearLevel, setSelectedYearLevel] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/applicantshow')
      .then((response) => response.json())
      .then((data) => setAcceptedApplicants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const modalHeaderImageUrl = 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t1.15752-9/448178098_453022927478220_490241507524360263_n.png?stp=dst-png_s2048x2048&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFR01OQUJpUZ-MuIg2ZXg5bowvWsUnT1tejC9axSdPW16XBAzVoNF4vXfwVYfchd0vVxb6Dd19oWPyTn45QrpuC&_nc_ohc=6ySIFggsLloQ7kNvgFxsEW1&_nc_ht=scontent.fcgy2-3.fna&cb_e2o_trans=t&oh=03_Q7cD1QE1CFziXC-1WW2ipwLrD31MfTBcYcsqCikPdES1jhNp-g&oe=6697E994';; // Update with your actual image URL

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProgramFilter = (e) => {
    setSelectedProgram(e.target.value);
  };

  const handleYearLevelFilter = (e) => {
    setSelectedYearLevel(e.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearFilters = () => {
    setSelectedProgram('');
    setSelectedYearLevel('');
    setSearchQuery('');
  };

  const filteredApplicants = acceptedApplicants.filter((student) => {
    const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase()) &&
      (selectedProgram ? student.program === selectedProgram : true) &&
      (selectedYearLevel ? student.yearLevel === selectedYearLevel : true);
  });

  return (
    <main className="w-full ml-5">
       {/* Your existing UI code */}
       <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Newly Accepted Students</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Overview of Recent Accepted Applicants</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">List of Students</p>
        </div>
        </div>
      

      <div className="bg-white p-5 mb-5 shadow overflow-hidden sm:rounded-xl mr-8 px-3">
      <div className="grid grid-cols-3 gap-3 p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Search by name"
          className="rounded-md col-span-1 px-3 py-2"
        />
      </div>
     

     <div className="grid grid-cols-3 gap-3 p-4">
      <table className="col-span-3 mb-5 table-fixed">
        <thead>
          <tr>
            <th className="col-span-1 px-4 py-2 text-left">Student ID</th>
            <th className="col-span-1 px-4 py-2 text-left">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplicants.map((student) => (
            <tr key={student.id} onClick={() => handleStudentClick(student)} className="cursor-pointer hover:bg-gray-200">
              <td className="px-4 py-2">{student.student_number}</td>
              <td className="px-4 py-2">{student.firstName} {student.middleName} {student.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
     

{/* Modal for displaying student details */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Student Information"
  className="fixed inset-0 z-50 flex items-center justify-center"
  overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
>
  {selectedStudent && (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full mx-4 md:mx-auto">
      <div className="relative h-[130px]">
        <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-full object-cover rounded-t-lg" />
      </div>

      <div className="relative px-4 py-5 sm:px-10 mt-1">
        <h3 className="text-lg leading-6 font-medium text-black">Applicant Information</h3>
      </div>

      <div className="border-t border-gray-200 max-h-[30vh] overflow-y-auto scrollbar-thin scrollbar-thumb-base scrollbar-track-gray-100">
        {/* Scrollable content */}
        <dl>
          <div className="bg-gray-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Student Number</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.student_number}</dd>
          </div>

          <div className="bg-gray-200 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Student Name</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</dd>
          </div>

          <div className="bg-gray-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Email</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.email}</dd>
          </div>

          <div className="bg-gray-200 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Contact Number</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.contactno}</dd>
          </div>

          <div className="bg-gray-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Address</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}</dd>
          </div>

          <div className="bg-gray-200 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">Emergency Contact</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}</dd>
          </div>

          <div className="bg-gray-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
            <dt className="text-sm font-bold text-gray-500">School Last Attended</dt>
            <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
          </div>
        </dl>
      </div>

      <div className="p-6">
        {/* Close button */}
        <div className="flex justify-end mt-5">
          <button
            onClick={closeModal}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )}
</Modal>

    </main>
  );
}

export default MainContent;
