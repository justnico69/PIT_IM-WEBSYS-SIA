import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Head } from '@inertiajs/react';

function TcmMainCont() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState(null);
  const modalHeaderImageUrl = 'https://i.ibb.co/yYWFXyM/image.png';

  useEffect(() => {
    const fetchTcmStudents = async () => {
      try {
        const response = await axios.get('/api/tcm-students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching TCM students:', error);
        setError('Failed to fetch TCM students. Please try again later.');
      }
    };

    fetchTcmStudents();
  }, []);

  const handleRowClick = async (studentNumber) => {
    try {
      const response = await axios.get(`/api/accepted-applicants/${studentNumber}`);
      setSelectedStudent(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
      setError('Failed to fetch student details. Please try again later.');
    }
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <main className="w-full ml-5">
      <Head title="Technology Communications Management" />
      <ToastContainer />
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Technology Communications Management Enrollees</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">List of enrolled Technology Communications Management students</p>
        </div>
      </div>
  
      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">List of students</p>
        </div>
      </div>
  
      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mb-5 mr-8 px-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Number
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year Level
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} onClick={() => handleRowClick(student.student_number)} className="cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.student_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.yrlevel}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.section}
                      </td>
                    </tr>
                  ))}
                </tbody>
        </table>
      </div>
  
      {selectedStudent && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="relative h-[130px]">
                <img src={modalHeaderImageUrl} alt="Modal Header" className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-5 bg-white sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Student Number</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.student_number}</dd>
                  </div>
                  <div className="bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Name</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</dd>
                  </div>
                  <div className="bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Date of Birth</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.month}/{selectedStudent.day}/{selectedStudent.year}</dd>
                  </div>
                  <div className="bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Gender</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.gender}</dd>
                  </div>
                  <div className="bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Nationality</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.nationality}</dd>
                  </div>
                  <div className="bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Email</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.email}</dd>
                  </div>
                  <div className="bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Contact No</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.contactno}</dd>
                  </div>
                  <div className="bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Address</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.streetadd}, {selectedStudent.city}, {selectedStudent.province}, {selectedStudent.zipcode}</dd>
                  </div>
                  <div className="bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Emergency Contact</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.emergencyName} ({selectedStudent.relationship}) - {selectedStudent.emergencyContactNumber}</dd>
                  </div>
                  <div className="bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-2">
                    <dt className="text-sm font-bold text-gray-500">Last School Attended</dt>
                    <dd className="mt-1 text-medium text-gray-900 sm:mt-0 sm:col-span-2">{selectedStudent.schoolLastAttended}</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{error && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Error
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {error}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setError(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default TcmMainCont;