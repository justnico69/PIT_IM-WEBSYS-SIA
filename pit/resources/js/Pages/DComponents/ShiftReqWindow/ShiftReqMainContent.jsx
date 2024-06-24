import React, { useState } from 'react';
import Modal from 'react-modal';
import { Head } from '@inertiajs/react';

Modal.setAppElement('#root');

function MainContent() {
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactno: '',
    studentNumber: '',
    program: '',
    yrlevel: '',
    semester: '',
    explanation: '',
    pdfFile: null, // State to store PDF file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewStudent({ ...newStudent, pdfFile: file });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form submission logic here...

    // Reset form fields
    setNewStudent({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contactno: '',
      studentNumber: '',
      program: '',
      yrlevel: '',
      semester: '',
      explanation: '',
      pdfFile: null,
    });
  };

  return (
    <main className="w-full ml-5">
      <Head title="Shift Request"/>
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Shift Request</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Submit your request form to change programs.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Program Shift Request Form</p>
        </div>
      </div>

      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mb-5 mr-8 px-3">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-3 gap-3 p-4">
            
            {/*PERSONAL INFO*/}
            <label className="block text-gray-800 text-lg font-bold col-span-3" htmlFor="firstName">Personal Information</label>
            <label className="block text-gray-500 text-base font-bold col-span-3" htmlFor="firstName">Student Name:</label>
            <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} placeholder="First Name" className="rounded-md col-span-1" />
            <input type="text" name="middleName" value={newStudent.middleName} onChange={handleInputChange} placeholder="Middle Name" className="rounded-md col-span-1" />
            <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} placeholder="Last Name" className="rounded-md col-span-1" />

            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="studentNumber">Student Number:</label>
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="email">Student Email:</label>
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="contactNumber">Contact Number:</label>
            <input type="text" name="studentNumber" value={newStudent.studentNumber} onChange={handleInputChange} placeholder="Student Number" className="rounded-md col-span-1" />
            <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} placeholder="Email Address" className="rounded-md col-span-1" />
            <input type="text" name="contactNumber" value={newStudent.contactNumber} onChange={handleInputChange} placeholder="Phone Number" className="rounded-md col-span-1" />
          </div>

          {/* BORDER */}
          <div className="border-t border-gray-300 mt-8 mx-4 my-4"></div>

          {/* PROGRAM INFO */}
          <div className="grid grid-cols-4 gap-3 p-4">
            <label className="block text-gray-800 text-lg font-bold col-span-3">Program Information</label>
            <label className="block text-gray-500 text-base font-bold col-span-2" htmlFor="yrlevel">Year Level:</label>
            <label className="block text-gray-500 text-base font-bold col-span-2" htmlFor="semester">Semester:</label>

            <select name="yrlevel" value={newStudent.yrlevel} onChange={handleInputChange} className="rounded-md text-gray-500 col-span-2">
              <option value="">Select your year level</option>
              <option value="Freshman">First Year (Freshman)</option>
              <option value="Sophomore">Second Year (Sophomore)</option>
              <option value="Junior">Third Year (Junior)</option>
              <option value="Senior">Fourth Year (Senior)</option>
            </select>
            <select name="semester" value={newStudent.semester} onChange={handleInputChange} className="rounded-md text-gray-500 col-span-2">
              <option value="">Select your semester</option>
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
            </select>

            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="program">Program for Shifting:</label>
            <select name="program" value={newStudent.program} onChange={handleInputChange} className="rounded-md text-gray-500 col-span-3">
              <option value="">Select your program</option>
              <option value="BSIT">BS in Information Technology</option>
              <option value="BSTCM">BS in Technology Communication Management</option>
              <option value="BSCS">BS in Computer Science</option>
              <option value="BSDS">BS in Data Science</option>
            </select>

            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="currentProgram">Current Enrolled Program:</label>
            <select name="currentProgram" value={newStudent.currentProgram} onChange={handleInputChange} className="rounded-md text-gray-500 col-span-3">
              <option value="">Select your program</option>
              <option value="BSIT">BS in Information Technology</option>
              <option value="BSTCM">BS in Technology Communication Management</option>
              <option value="BSCS">BS in Computer Science</option>
              <option value="BSDS">BS in Data Science</option>
            </select>
          </div>

          {/* BORDER */}
          <div className="border-t border-gray-300 mt-8 mx-4 my-4"></div>

          {/* REASON FOR REQ INFO */}
          <div className="grid grid-cols-4 gap-3 p-4">
            <label className="block text-gray-800 text-lg font-bold col-span-3">Reason for Request</label>
            <label className="block text-gray-500 text-base font-bold col-span-2" htmlFor="explanation">Explanation:</label>
            <textarea name="explanation" value={newStudent.explanation} onChange={handleInputChange} placeholder="Please provide your explanation here" className="rounded-md col-span-4 resize-y h-32"></textarea>
          </div>

          {/* BORDER */}
          <div className="border-t border-gray-300 mt-8 mx-4 my-4"></div>

          {/* UPLOAD CONSENT PDF FILE BUTTON */}
          <div className="grid grid-cols-4 gap-3 p-4">
          <label className="block text-gray-800 text-lg font-bold col-span-3">Signatory</label>
            <label className="block text-gray-500 text-base font-bold col-span-4" htmlFor="pdfFile">Submit a consent letter signed by the student, parent/guardian, and Academic Advisor/Dean</label>
            <div className="col-span-3 flex items-center">
              <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Choose PDF File
                <input type="file" name="pdfFile" onChange={handleFileChange} className="hidden" accept="application/pdf" />
              </label>
              {newStudent.pdfFile && (
                <span className="ml-3 text-gray-700">{newStudent.pdfFile.name}</span>
              )}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="mt-8 w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Submit Shift Request Form
          </button>
        </form>
      </div>
    </main>
  );
}

export default MainContent;
