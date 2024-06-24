import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

function MainContent() {
  const [selectedProgram, setSelectedProgram] = useState('');

  // Sample data for the prospectus based on programs
  const prospectusData = {
    BSIT: {
      Freshman: {
        '1st Semester': [
          { courseCode: 'IT111', courseName: 'Introduction to Computing', units: 3 },
          { courseCode: 'IT112', courseName: 'Computer Programming 1', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'IT121', courseName: 'Computer Programming 2', units: 3 },
          { courseCode: 'IT122', courseName: 'Data Structures and Algorithms', units: 3 },
          { courseCode: 'IT123', courseName: 'Discrete Mathematics', units: 3 },
        ],
      },
      Sophomore: {
        '1st Semester': [
          { courseCode: 'IT211', courseName: 'Intro to Human Computer Interaction', units: 3 },
          { courseCode: 'IT212', courseName: 'Fundamentals of Database Systems', units: 3 },
          { courseCode: 'IT213', courseName: 'Platform Technologies', units: 3 },
          { courseCode: 'IT214', courseName: 'Object Oriented Programming', units: 3 },
          { courseCode: 'IT215', courseName: 'Accounting Principles', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'IT221', courseName: 'Information Management', units: 3 },
          { courseCode: 'IT222', courseName: 'Networking 1', units: 3 },
          { courseCode: 'IT223', courseName: 'Web Systems and Technologies', units: 3 },
          { courseCode: 'IT224', courseName: 'Systems Integration and Architecture 1', units: 3 },
        ],
      },
      Junior: {
        '1st Semester': [
          { courseCode: 'IT311', courseName: 'Information Assurance and Security', units: 3 },
          { courseCode: 'IT312', courseName: 'Networking 2', units: 3 },
          { courseCode: 'IT313', courseName: 'Mobile Programming', units: 3 },
          { courseCode: 'IT314', courseName: 'Software Programming', units: 3 },
          { courseCode: 'IT315', courseName: 'IT Elective 1', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'IT321', courseName: 'CAPSTONE Project and Research 1', units: 3 },
          { courseCode: 'IT322', courseName: 'Integrative Programming and Technologies', units: 3 },
          { courseCode: 'IT323', courseName: 'Applications Development and Emerging Technologies', units: 3 },
          { courseCode: 'IT324', courseName: 'Quantitative Methods', units: 3 },
          { courseCode: 'IT325', courseName: 'IT ELective 2', units: 3 },
        ],
      },
      Senior: {
        '1st Semester': [
          { courseCode: 'IT411', courseName: 'CAPSTONE Project and Research 2', units: 3 },
          { courseCode: 'IT412', courseName: 'System Administration and Maintenance', units: 3 },
          { courseCode: 'IT413', courseName: 'Social and Professional Issues', units: 3 },
          { courseCode: 'IT414', courseName: 'IT Elective 3', units: 3 },
          { courseCode: 'IT415', courseName: 'IT Elective 4', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'IT421', courseName: 'PRACTICUM (486 Hours)', units: 6 },
        ],
      },
    },

    BSTCM: {
      Freshman: {
        '1st Semester': [
          { courseCode: 'TCM111', courseName: 'Introduction to Communication', units: 3 },
          { courseCode: 'TCM112', courseName: 'Introduction to Technology Communication Management', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'TCM124', courseName: 'Principles of Management', units: 3 },
          { courseCode: 'TCM125', courseName: 'In-Campus Immersion', units: 3 },
        ],
      },
      Sophomore: {
        '1st Semester': [
          { courseCode: 'TCM212', courseName: 'Personnel Management', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'TCM221', courseName: 'Interpersonal Communication with Human Behavior in the Organization', units: 3 },
          { courseCode: 'TCM222', courseName: 'Content Writing 1', units: 3 },
          { courseCode: 'TCM223', courseName: 'Theories of Communication', units: 3 },
        ],
      },
      Junior: {
        '1st Semester': [
          { courseCode: 'TCM311a', courseName: 'Elective 1 (Knowledge Management', units: 3 },
          { courseCode: 'TCM311b', courseName: 'Elective 1 (Multimedia Tools 1)', units: 3 },
          { courseCode: 'TCM312', courseName: 'Digital Activism', units: 3 },
          { courseCode: 'TCM313', courseName: 'Podcasting: Principles & Practices', units: 3 },
          { courseCode: 'TCM314', courseName: 'Content Writing 2', units: 3 },
          { courseCode: 'TCM315', courseName: 'Communication Management', units: 3 },
          { courseCode: 'TCM316', courseName: 'Professional Presentation', units: 3 },
          { courseCode: 'TCM317a', courseName: 'Elective 2 (Communication for Corporations, Nonprofits)', units: 3 },
          { courseCode: 'TCM317b', courseName: 'Elective 2 (Visual Communication and Graphic Design)', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'TCM321', courseName: 'Technopreneurship', units: 3 },
          { courseCode: 'TCM322', courseName: 'Project Management', units: 3 },
          { courseCode: 'TCM323', courseName: 'Intercultural Communication', units: 3 },
          { courseCode: 'TCM324', courseName: 'Media Laws and Ethics', units: 3 },
          { courseCode: 'TCM325', courseName: 'Thesis 1', units: 3 },
          { courseCode: 'TCM326a', courseName: 'Elective 3 (Communication Strategies)', units: 3 },
          { courseCode: 'TCM326b', courseName: 'Elective 3 (Multimedia Tools 2)', units: 3 },
        ],
      },
      Senior: {
        '1st Semester': [
          { courseCode: 'TCM411', courseName: 'Communication & Social Media', units: 3 },
          { courseCode: 'TCM412a', courseName: 'Elective 4 (Technology Marketing)', units: 3 },
          { courseCode: 'TCM412b', courseName: 'Elective 4 (Film Production)', units: 3 },
          { courseCode: 'TCM413', courseName: 'Thesis 2', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'TCM421', courseName: 'Internship', units: 6 },
        ],
      },
    },

    BSCS: {
      Freshman: {
        '1st Semester': [
          { courseCode: 'CS111', courseName: 'Introduction to Cumputing', units: 3 },
          { courseCode: 'CS112', courseName: 'Computer Programming 1', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'CS121', courseName: 'Computer Programming 2', units: 3 },
          { courseCode: 'CS122', courseName: 'Physics for Computer Science (Basic Electronics)', units: 3 },
        ],
      },
      Sophomore: {
        '1st Semester': [
          { courseCode: 'CS211', courseName: 'Discrete Mathematics 1', units: 3 },
          { courseCode: 'CS212', courseName: 'Human Computer Interaction', units: 3 },
          { courseCode: 'CS213', courseName: 'Data Structures and Algorithms 1', units: 3 },
          { courseCode: 'CS214', courseName: 'Fundamentals of Database Systems', units: 3 },
          { courseCode: 'CSMath211', courseName: 'Statistics for Computer Science', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'CSMath221', courseName: 'Calculus for Computer Science', units: 3 },
          { courseCode: 'CS221', courseName: 'Algorithms and Complexity 2', units: 3 },
          { courseCode: 'CS222', courseName: 'Computer Architecture and Organization', units: 3 },
          { courseCode: 'CS223', courseName: 'Discrete Structure 2', units: 3 },
          { courseCode: 'CS224', courseName: 'Applications Development and Emerging Technologies', units: 3 },
          { courseCode: 'CS225', courseName: 'Object Orientred Programming', units: 3 },
        ],
      },
      Junior: {
        '1st Semester': [
          { courseCode: 'CS311', courseName: 'Automata Theory and Formal Languages', units: 3 },
          { courseCode: 'CS312', courseName: 'Introduction to Artificial Intelligence', units: 3 },
          { courseCode: 'CS313', courseName: 'Networks and Communications', units: 3 },
          { courseCode: 'CS314', courseName: 'Operating Systems', units: 3 },
          { courseCode: 'CS315', courseName: 'Principles of Programming Languages', units: 3 },
          { courseCode: 'CS316', courseName: 'Information Management', units: 3 },
          { courseCode: 'CS317', courseName: 'Software Engineering', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'CS321', courseName: 'Information Assurance and Security', units: 3 },
          { courseCode: 'CS322', courseName: 'Technopreneurship', units: 3 },
          { courseCode: 'CS323', courseName: 'Parallel and Distributed Computing', units: 3 },
          { courseCode: 'CS324', courseName: 'Machine Learning', units: 3 },
          { courseCode: 'CS325', courseName: 'Research Methods', units: 3 },
          { courseCode: 'CS326', courseName: 'Software Implementation and Management', units: 3 },
          { courseCode: 'CS327', courseName: 'Social Issues and Professional Practice', units: 3 },
        ],
      },
      Senior: {
        '1st Semester': [
          { courseCode: 'CS411', courseName: 'CS Thesis Writing 1', units: 3 },
          { courseCode: 'CS412', courseName: 'CS Thesis Writing 2', units: 3 },
          { courseCode: 'CS413', courseName: 'Graphics and Visual Computing', units: 3 },
          { courseCode: 'CS414', courseName: 'Image Processing', units: 3 },
          { courseCode: 'CS415', courseName: 'Data Mining', units: 3 },
          { courseCode: 'CS416', courseName: 'Introduction to Neutral Networks and Deep Learning', units: 3 },
          { courseCode: 'CS417', courseName: 'Computer Vision', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'CS421', courseName: 'OJT (Practicum)', units: 6 },
        ],
      },
    },

    BSDS: {
      Freshman: {
        '1st Semester': [
          { courseCode: 'DS111', courseName: 'Introduction to Computer Science', units: 3 },
          { courseCode: 'DS112', courseName: 'Computer Programming', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'DS121', courseName: 'Introduction to Data Science', units: 3 },
          { courseCode: 'DS122', courseName: 'Introduction to Statistical Methods', units: 3 },
          { courseCode: 'DS123', courseName: 'Data Structures and Algorithms', units: 3 },
          { courseCode: 'DS124', courseName: 'Linear Algebra', units: 3 },
        ],
      },
      Sophomore: {
        '1st Semester': [
          { courseCode: 'DS211', courseName: 'Linear and Nonlinear Models', units: 3 },
          { courseCode: 'DS212', courseName: 'Object Oriented Programming', units: 3 },
          { courseCode: 'DS213', courseName: 'Intro to Human Computer Interaction', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'DS221', courseName: 'Data Visualization and Storytelling', units: 3 },
          { courseCode: 'DS222', courseName: 'Theory of Databases', units: 3 },
          { courseCode: 'DS223', courseName: 'Computer Networking', units: 3 },
          { courseCode: 'DS224', courseName: 'Optimization Theory', units: 3 },
        ],
      },
      Junior: {
        '1st Semester': [
          { courseCode: 'DS311', courseName: 'Exploratory Data Analysis', units: 3 },
          { courseCode: 'DS312', courseName: 'Data Mining and Applications', units: 3 },
          { courseCode: 'DS313', courseName: 'Advanced Database Management System', units: 3 },
          { courseCode: 'DS314', courseName: 'DS Elective 1', units: 3 },
          { courseCode: 'DS315', courseName: 'DS Elective 2', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'DS321', courseName: 'Computational Statistics', units: 3 },
          { courseCode: 'DS322', courseName: 'Machine Learning', units: 3 },
          { courseCode: 'DS323', courseName: 'Cloud Computing', units: 3 },
          { courseCode: 'DS324', courseName: 'DS Elective 3', units: 3 },
          { courseCode: 'DS325', courseName: 'Capstone Project 1', units: 3 },

        ],
      },
      Senior: {
        '1st Semester': [
          { courseCode: 'DS411', courseName: 'Predictive Analytics', units: 3 },
          { courseCode: 'DS412', courseName: 'Time Series Analysis and Stochastic', units: 3 },
          { courseCode: 'DS413', courseName: 'DS Elective 4', units: 3 },
          { courseCode: 'DS414', courseName: 'Data Science Capstone 2', units: 3 },
        ],
        '2nd Semester': [
          { courseCode: 'DS421', courseName: 'OJT (Data Science Practice)', units: 6 },
        ],
      },
    },
  };

  const handleProgramChange = (e) => {
    setSelectedProgram(e.target.value);
  };

  //UI DESIGN
  return (
    <main className="w-full ml-5">
      <Head title="Program Details"/>
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Program Details</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Prospectus</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Program and Courses</p>
        </div>
      </div>

      <div className="bg-white p-5 mb-5 shadow overflow-hidden sm:rounded-xl mr-8 px-3">
        <form>
          <div className="grid grid-cols-3 gap-3 p-4">
            <label className="block text-gray-500 text-base font-bold col-span-3" htmlFor="program">
              Select Program:
            </label>
            <select
              name="program"
              value={selectedProgram}
              onChange={handleProgramChange}
              className="rounded-md col-span-3"
            >
              <option value="">Select your program</option>
              <option value="BSIT">Bachelor of Science in Information Technology</option>
              <option value="BSTCM">Bachelor of Science in Technology Communication Management</option>
              <option value="BSCS">Bachelor of Science in Computer Science</option>
              <option value="BSDS">Bachelor of Science in Data Science</option>
            </select>
          </div>
        </form>

        {selectedProgram && (
          <div className="gap-3 p-2">
            {Object.keys(prospectusData[selectedProgram]).map((yearLevel) => (
              <div key={yearLevel}>
                <h3 className="text-xl font-bold text-blue-900 mt-2 ml-4">{yearLevel}</h3>
                {Object.keys(prospectusData[selectedProgram][yearLevel]).map((semester) => (
                  <div key={semester}>
                    <h4 className="text-lg font-semibold text-blue-800 mt-1 ml-4">{semester}</h4>
                    <table className="w-full mb-5 table-fixed">
                      <thead>
                        <tr>
                          <th className="w-1/4 px-4 py-2 text-left">Course Code</th>
                          <th className="w-1/2 px-4 py-2 text-left">Course Name</th>
                          <th className="w-1/4 px-4 py-2 text-left">Units</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prospectusData[selectedProgram][yearLevel][semester].map((course, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">{course.courseCode}</td>
                            <td className="border px-4 py-2">{course.courseName}</td>
                            <td className="border px-4 py-2">{course.units}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MainContent;
