import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MainContent() {
  const [newStudent, setNewStudent] = useState({
    yrlevel: '',
    semester: '',
    tuitionStatus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { yrlevel, semester } = newStudent;
    const tuitionStatus = getTuitionStatus(yrlevel, semester);
    setNewStudent({ ...newStudent, tuitionStatus });
  };

  const getTuitionStatus = (yrlevel, semester) => {
    // Dummy function to simulate tuition status based on year level and semester
    // Replace with actual logic to determine tuition status
    return 'Paid'; // Example: Assuming tuition is paid for all cases
  };

  return (
    <main className="w-full ml-5">
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-bold text-blue-800">Assessment & Billing</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Manage your enrollment and tuition fees</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Tuition Fee Balance</p>
        </div>
      </div>

      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mb-5 mr-8 px-3">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-4 gap-3 p-4">
            {/* Dropdowns for year level and semester */}
            <label className="block text-gray-500 text-base font-bold col-span-2" htmlFor="yrlevel">Year Level:</label>
            <label className="block text-gray-500 text-base font-bold col-span-2" htmlFor="semester">Semester:</label>

            <select
              name="yrlevel"
              value={newStudent.yrlevel}
              onChange={handleInputChange}
              className="rounded-md text-gray-500 col-span-2"
            >
              <option value="">Select your year level</option>
              <option value="Freshman">First Year (Freshman)</option>
              <option value="Sophomore">Second Year (Sophomore)</option>
              <option value="Junior">Third Year (Junior)</option>
              <option value="Senior">Fourth Year (Senior)</option>
            </select>

            <select
              name="semester"
              value={newStudent.semester}
              onChange={handleInputChange}
              className="rounded-md text-gray-500 col-span-2"
            >
              <option value="">Select your semester</option>
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
            </select>

            {/* Display tuition status */}
            <label className="block text-gray-500 text-base font-bold mt-8 col-span-4">
              Tuition Status:
            </label>
            <div className="rounded-md col-span-4 bg-gray-100 px-3 py-2">
              <span className="text-gray-700">{newStudent.tuitionStatus}</span>
            </div>
          </div>

        
        </form>
      </div>
    </main>
  );
}

export default MainContent;
