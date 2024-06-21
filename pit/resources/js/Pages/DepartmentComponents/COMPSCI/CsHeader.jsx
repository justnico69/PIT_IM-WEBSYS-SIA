import React from 'react';

function CsHeader() {
  return (
    <header>
      <nav className="bg-white">
        <div className="text-blue-800 px-10 py-6 z-10 w-full border-blue-200">
          <div className="flex items-center justify-between py-2 text-xl">
            <img
              src="https://i.ibb.co/Q6SrF6M/Edutech.png"
              alt="EduTech Logo"
              className="h-8 w-30 object-contain mr-5 mb-3-2"
            />
            <span className="text-xl font-bold">
              NNN College of Information Technology and Computing Admission Form
            </span>
            <div className="flex items-center ml-auto text-gray-500">
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default CsHeader;
