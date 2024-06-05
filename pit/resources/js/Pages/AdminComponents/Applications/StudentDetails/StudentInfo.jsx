// js/Pages/AdminComponents/Applications/StudentInformation/StudentInfo.js

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentInfo() {
  const { studentId } = useParams();
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch student data based on studentId
    fetch(`http://localhost:8000/api/applicants/${studentId}`)
      .then((response) => response.json())
      .then((data) => setSelectedStudent(data));
  }, [studentId]);

  if (!selectedStudent) {
    // Handle loading state or error (e.g., show a spinner or error message)
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Display student information */}
      <h2>{selectedStudent.firstName} {selectedStudent.lastName}</h2>
      <p>Email: {selectedStudent.email}</p>
      {/* Add other student details here */}
      {/* For example: */}
      <p>Contact Number: {selectedStudent.contactno}</p>
      <p>Address: {selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}</p>
      {/* Add more details as needed */}
    </main>
  );
}

export default StudentInfo;
