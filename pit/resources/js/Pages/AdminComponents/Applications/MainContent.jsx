import { useEffect, useState } from 'react';

function MainContent() {
  const [studentNames, setStudentNames] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/applicants')
      .then((response) => response.json())
      .then((data) => setStudentNames(data));
  }, []);

  const handleStudentClick = (id) => {
    fetch(`http://localhost:8000/api/applicants/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedStudent(data));
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 ml-10">Ongoing Applications</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg ml-10 mr-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Students</h3>
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
      {selectedStudent && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-10">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Student Information</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</dd>
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
          </div>
        </div>
      )}
    </main>
  );
}

export default MainContent;
