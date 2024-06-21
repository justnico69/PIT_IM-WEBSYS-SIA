import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MainContent = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedYearLevel, setSelectedYearLevel] = useState('');
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [corSent, setCorSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
    setCorSent(false);
  };

  const handleSendCor = () => {
    fetch('http://localhost:8000/api/send-cor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ student: selectedStudent }),
    })
      .then((response) => {
        if (response.ok) {
          setCorSent(true);
          setShowAlert(true);
        } else {
          console.error('Failed to send CoR');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const closeAlert = () => {
    setShowAlert(false);
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
                  <td className="px-4 py-2">{student.firstName} {student.middleName} {student.lastName}</td>
                  <td className="px-4 py-2">{student.program}</td>
                  <td className="px-4 py-2">{student.yearLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="w-full max-w-md mx-auto mt-10 bg-white p-5 rounded-xl shadow-lg">
        <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-auto mb-4" />
        {selectedStudent && (
          <>
            <h2 className="text-lg font-bold mb-4">Send Certificate of Registration to {selectedStudent.firstName}</h2>
            <p className="mb-4">Are you sure you want to send the COR to {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}?</p>
            <div className="flex justify-end">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-md mr-2">Cancel</button>
              <button onClick={handleSendCor} className="px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
            </div>
          </>
        )}
      </Modal>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">CoR Sent!</h2>
            <p className="mb-4">The Certificate of Registration has been sent to {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}.</p>
            <button onClick={closeAlert} className="px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;
