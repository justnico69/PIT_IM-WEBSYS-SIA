import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function MainContent() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactno: '',
    streetadd: '',
    city: '',
    province: '',
    zipcode: '',
    emergencyName: '',
    relationship: '',
    emergencyContactNumber: '',
    schoolLastAttended: ''
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
      streetadd: '',
      city: '',
      province: '',
      zipcode: '',
      emergencyName: '',
      relationship: '',
      emergencyContactNumber: '',
      schoolLastAttended: ''
    });
  };

  return (
    <main className="container mx-auto py-10">
    <h1 className="text-3xl font-bold mb-8 text-white">Enrollment</h1>
    <div className="bg-white p-10 shadow overflow-hidden sm:rounded-lg mr-5 px-3">
        <div className="px-4 py-5 sm:px-4">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Enrollment Form</h3>
        </div>
        <div className="border-t border-gray-200 rounded-sm">
        <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-3 gap-3 p-4">
           
            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Student Number:</label>
            <input type="text" name="studentNumber" value={newStudent.studentNumber} onChange={handleInputChange} placeholder="Student Number" className="rounded-md col-span-3" />

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Email Address:</label>
            <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} placeholder="Email Address" className="rounded-md col-span-3" />

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="firstName">Program:</label>
            <input type="text" name="program" value={newStudent.program} onChange={handleInputChange} placeholder="e.g. Bachelor of Science in Information Technology" className="rounded-md col-span-3" />
            
            <label className="block text-gray-500 text-base font-bold col-span-2 mt-3" htmlFor="firstName">Year Level:</label>
            <label className="block text-gray-500 text-base font-bold col-span-1 mt-3" htmlFor="firstName">Semester:</label>
            <input type="text" name="yrlevel" value={newStudent.yrlevel} onChange={handleInputChange} placeholder="e.g. Freshman" className="rounded-md col-span-2" />
            <input type="text" name="semester" value={newStudent.semester} onChange={handleInputChange} placeholder="e.g. 1st Semester" className="rounded-md col-span-1" />
            

            </div>
            <button type="submit" className="mt-8 w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Submit
            </button>
        </form>
        </div>
    </div>
    </main>

  );
}

export default MainContent;
