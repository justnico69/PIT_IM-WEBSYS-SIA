import React from 'react';

function AdHeader() {
  return (
    <header>
      <nav className="bg-white">
        <div className="text-blue-800 px-10 py-5 z-10 w-full border-blue-200">
          <div className="flex items-center justify-between py-2 text-5x1"> {/* Fixed typo: text-5x1 should be text-xl */}
          <img
                  src="https://i.ibb.co/Q6SrF6M/Edutech.png"
                  alt="EduTech Logo"
                  className="h-8 w-30 object-contain mr-5 mb-3-2"
                  />
            <span className="text-xl font-bold"> {/* Adjusted text size */}
              NNN College of Information Technology and Computing Admission Form
            </span>
            <div className="flex items-center ml-auto text-gray-500"> {/* Added ml-auto to push buttons to the right */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdHeader;
