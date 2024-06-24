import React, { useState } from 'react';
import Modal from 'react-modal';
import { Head } from '@inertiajs/react';

Modal.setAppElement('#root');

const feeDetails = {
  Freshman: {
    "1st Semester": {
      tuitionFee: 10000,
      registrationFee: 3200,
      libraryFee: 1000,
      miscellaneousFee: 1150,
      total: 15350,
    },
    "2nd Semester": {
      tuitionFee: 10000,
      registrationFee: 3200,
      libraryFee: 1000,
      miscellaneousFee: 1150,
      total: 15350,
    },
  },
  Sophomore: {
    "1st Semester": {
      tuitionFee: 11000,
      registrationFee: 3300,
      libraryFee: 1000,
      miscellaneousFee: 1200,
      total: 16500,
    },
    "2nd Semester": {
      tuitionFee: 11000,
      registrationFee: 3300,
      libraryFee: 1000,
      miscellaneousFee: 1200,
      total: 16500,
    },
  },
  Junior: {
    "1st Semester": {
      tuitionFee: 12000,
      registrationFee: 3400,
      libraryFee: 1000,
      miscellaneousFee: 1250,
      total: 17650,
    },
    "2nd Semester": {
      tuitionFee: 12000,
      registrationFee: 3400,
      libraryFee: 1000,
      miscellaneousFee: 1250,
      total: 17650,
    },
  },
  Senior: {
    "1st Semester": {
      tuitionFee: 13000,
      registrationFee: 3500,
      libraryFee: 1000,
      miscellaneousFee: 1300,
      total: 18800,
    },
    "2nd Semester": {
      tuitionFee: 13000,
      registrationFee: 3500,
      libraryFee: 1000,
      miscellaneousFee: 1300,
      total: 18800,
    },
  },
};

function MainContent() {
  const [newStudent, setNewStudent] = useState({
    yrlevel: '',
    semester: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const getFeeDetails = (yrlevel, semester) => {
    if (feeDetails[yrlevel] && feeDetails[yrlevel][semester]) {
      return feeDetails[yrlevel][semester];
    }
    return null;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const { yrlevel, semester } = newStudent;
  const currentFeeDetails = getFeeDetails(yrlevel, semester);

  return (
    <main className="w-full ml-5">
      <Head title="Assessment & Billing"/>
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Assessment & Billing</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Manage your enrollment and tuition fees</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Tuition Fee Balance</p>
        </div>
      </div>

      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mb-5 mr-8 px-3">
        <form>
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

            {/* Display tuition details in a table */}
            {currentFeeDetails && (
              <>
                <label className="block text-gray-500 text-base font-bold mt-8 col-span-4">
                  Tuition Details:
                </label>
                <div className="rounded-md col-span-4 bg-gray-100 px-3 py-2">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tuition Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{formatCurrency(currentFeeDetails.tuitionFee)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Registration Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{formatCurrency(currentFeeDetails.registrationFee)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Library Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{formatCurrency(currentFeeDetails.libraryFee)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Miscellaneous Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{formatCurrency(currentFeeDetails.miscellaneousFee)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Total</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-gray-900">{formatCurrency(currentFeeDetails.total)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default MainContent;
