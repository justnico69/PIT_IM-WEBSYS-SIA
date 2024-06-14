import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MainContent() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactno: '',
  });

  const studentNames = [
    // Existing student data here...
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleStudentClick = (id) => {
    const student = studentNames.find(student => student.id === id);
    setSelectedStudent(student);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    setNewStudent({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contactno: '',
    });
  };

  return (
    <main className="w-full ml-5">
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
            <p className="text-3xl mt-3 font-bold text-blue-800">Enrollment</p>
            <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Let's get started!</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mb-3">
                <div className="mt-5">
                    <p className="text-base font-bold text-white">Enrollment Form</p>
                </div>
            </div>

        <div className="bg-white p-5 shadow overflow-hidden sm:rounded-lg mr-8 px-3">
        <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-3 gap-3 p-4">
           
            <label className="block text-gray-500 text-base font-bold col-span-3" htmlFor="firstName">Student Name:</label>
            <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} placeholder="First Name" className="rounded-md col-span-1" />
            <input type="text" name="middleName" value={newStudent.middleName} onChange={handleInputChange} placeholder="Middle Name" className="rounded-md col-span-1" />
            <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} placeholder="Last Name" className="rounded-md col-span-1" />
            
            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Student Number:</label>
            <input type="text" name="studentNumber" value={newStudent.studentNumber} onChange={handleInputChange} placeholder="Student Number" className="rounded-md col-span-3" />

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Student Email:</label>
            <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} placeholder="Email Address" className="rounded-md col-span-3" />

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Contact Number:</label>
            <input type="text" name="contactNumber" value={newStudent.contactNumber} onChange={handleInputChange} placeholder="Phone Number" className="rounded-md col-span-3" />
            
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="program">Program:</label>
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="yrlevel">Year Level:</label>
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="semester">Semester:</label>
            <select name="program" value={newStudent.program} onChange={handleInputChange} className="rounded-md col-span-1">
                <option value="" disabled>Select your program</option>
                <option value="BSIT">Bachelor of Science in Information Technology</option>
                <option value="BSTCM">Bachelor of Science in Technology Communication Management</option>
                <option value="BSCS">Bachelor of Science in Computer Science</option>
                <option value="BSDS">Bachelor of Science in Data Science</option>
            </select>

            
            <select name="yrlevel" value={newStudent.yrlevel} onChange={handleInputChange} className="rounded-md col-span-1">
                <option value="" disabled>Select your year level</option>
                <option value="Freshman">First Year (Freshman)</option>
                <option value="Sophomore">Second Year (Sophomore)</option>
                <option value="Junior">Third Year (Junior)</option>
                <option value="Senior">Fourth Year (Senior)</option>
            </select>
            <select name="semester" value={newStudent.semester} onChange={handleInputChange} className="rounded-md col-span-1">
                <option value="" disabled>Select your semester</option>
                <option value="1st Semester">1st Semester</option>
                <option value="2nd Semester">2nd Semester</option>
            </select>

            </div>
            <button type="submit" className="mt-8 w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Submit Enrollment Form
            </button>
        </form>
    </div>
    </main>

  );
}

export default MainContent;
