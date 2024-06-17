import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MainContent = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedYearLevel, setSelectedYearLevel] = useState('');
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [corSent, setCorSent] = useState(false); // State to track if CoR is sent

  useEffect(() => {
    fetch('http://localhost:8000/api/applicantshow')
      .then((response) => response.json())
      .then((data) => setAcceptedApplicants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const modalHeaderImageUrl = 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t1.15752-9/448178098_453022927478220_490241507524360263_n.png?stp=dst-png_s2048x2048&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFR01OQUJpUZ-MuIg2ZXg5bowvWsUnT1tejC9axSdPW16XBAzVoNF4vXfwVYfchd0vVxb6Dd19oWPyTn45QrpuC&_nc_ohc=6ySIFggsLloQ7kNvgFxsEW1&_nc_ht=scontent.fcgy2-3.fna&cb_e2o_trans=t&oh=03_Q7cD1QE1CFziXC-1WW2ipwLrD31MfTBcYcsqCikPdES1jhNp-g&oe=6697E994';

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
    setCorSent(false); // Reset state when modal closes
  };

  const handleSendCor = () => {
    // Here you can implement the logic to send CoR
    // For demonstration, I'm setting a state to simulate sending
    setCorSent(true);
  };

  return (
    <main className="w-full ml-5">
      {/* Your existing UI code */}
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Distribution of CoR</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Distribution of Official Certificate of Registration to Recent Accepted Applicants</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">List of Students</p>
        </div>
      </div>

      <div className="bg-white p-5 mb-5 shadow overflow-hidden sm:rounded-xl mr-8 px-3">
        <p className="block text-gray-500 text-base font-bold mt-4 ml-4">Search and Filter</p>
        <div className="grid grid-cols-3 gap-3 p-4">
          <select
            value={selectedProgram}
            onChange={handleProgramFilter}
            className="rounded-md col-span-1 px-3 py-2"
          >
            <option value="">All Programs</option>
            <option value="BSIT">BSIT</option>
            <option value="BSTCM">BSTCM</option>
            <option value="BSCS">BSCS</option>
            <option value="BSDS">BSDS</option>
          </select>

          <select
            value={selectedYearLevel}
            onChange={handleYearLevelFilter}
            className="rounded-md col-span-1 px-3 py-2"
          >
            <option value="">All Year Levels</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          <table className="col-span-3 mb-5 table-fixed">
            <thead>
              <tr>
                <th className="col-span-1 px-4 py-2 text-left">Student ID</th>
                <th className="col-span-1 px-4 py-2 text-left">Full Name</th>
                <th className="col-span-1 px-4 py-2 text-left">Program</th>
                <th className="col-span-1 px-4 py-2 text-left">Year Level</th>
              </tr>
            </thead>
            <tbody>
              {acceptedApplicants.map((student) => (
                <tr key={student.id} onClick={() => handleStudentClick(student)} className="cursor-pointer hover:bg-gray-200">
                  <td className="px-4 py-2">{student.student_number}</td>
                  <td className="px-4 py-2">{student.firstName} {student.lastName}</td>
                  <td className="px-4 py-2">{student.program}</td>
                  <td className="px-4 py-2">{student.yearLevel}</td>
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
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
      >
        {selectedStudent && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl mx-auto">
            <div className="relative h-[130px]">
              <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-full object-cover rounded-t-lg" />
            </div>

            <div className="relative px-4 py-5 sm:px-10 mt-1">
                  <h3 className="text-lg leading-6 font-medium text-black">Applicant Information</h3>
                </div>
                <div className="border-t border-gray-200">
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
                      <dd className="mt-1 text-medium text-black sm:mt-0 sm:col-span-2">{selectedStudent.schoollastattended}</dd>
                    </div>

                    </dl>
                </div>

            <div className="p-6">
               {/* Close and Send CoR buttons */}
               <div className="flex justify-between mt-5">
                    <button
                      onClick={handleSendCor}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send CoR to Student Email
                    </button>
                    <button
                      onClick={closeModal}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
