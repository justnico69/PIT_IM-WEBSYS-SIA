import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

function EnrollMainContent() {
  const [newStudent, setNewStudent] = useState({
    student_number: '',
    program: '',
    yrlevel: '',
    semester: '',
    section: '',
    id_image: ''
  });

  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (newStudent.program && newStudent.yrlevel) {
      fetchSections();
    }
  }, [newStudent.program, newStudent.yrlevel]);

  const fetchSections = () => {
    axios.get('/api/sections', {
      params: {
        program: newStudent.program,
        yrlevel: newStudent.yrlevel
      }
    })
      .then(response => {
        setSections(response.data.sections);
      })
      .catch(error => {
        console.error('There was an error fetching sections!', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewStudent({ ...newStudent, id_image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in newStudent) {
      formData.append(key, newStudent[key]);
    }

    console.log('Submitting form data:', Object.fromEntries(formData.entries()));

    try {
      const response = await axios.post('/api/enroll', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);

      // Display success message
      toast.success('Submission Sent Successfully. Please complete your payments to be enrolled in your department and section');

      // Reset form fields
      setNewStudent({
        student_number: '',
        program: '',
        yrlevel: '',
        semester: '',
        section: '',
        id_image: ''
      });
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response) {
        console.error('Error details:', error.response.data);

        // Display appropriate error message
        if (error.response.status === 400 && error.response.data.message === 'You have already submitted the enrollment form.') {
          toast.warn('You have already enrolled');
        } else {
          toast.error('There was an error processing your request. Please try again later.');
        }
      }
    }
  };

  return (
    <main className="w-full ml-5">
      <ToastContainer />
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

      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mb-5 mr-8 px-3">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-3 gap-3 p-4">
            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="student_number">Student Number:</label>
            <input type="text" name="student_number" value={newStudent.student_number} onChange={handleInputChange} placeholder="Student Number" className="rounded-md col-span-3" />

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

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="section">Section:</label>
            <select name="section" value={newStudent.section} onChange={handleInputChange} className="rounded-md col-span-3">
              <option value="" disabled>Select your section</option>
              {sections.map((section, index) => (
                <option key={index} value={section}>{section}</option>
              ))}
            </select>

            <label className="block text-gray-500 text-base font-bold col-span-3 mt-3" htmlFor="id_image">Upload 2x2 ID Image:</label>
            <div className="col-span-3 flex items-center">
              <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Choose File
                <input type="file" name="id_image" onChange={handleFileChange} className="hidden" accept="image/*" />
              </label>
              {newStudent.id_image && (
                <span className="ml-3 text-gray-700">{newStudent.id_image.name}</span>
              )}
            </div>
          </div>

          <button type="submit" className="mt-8 w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Submit Enrollment Form
          </button>
        </form>
      </div>
    </main>
  );
}

export default EnrollMainContent;
