import React from 'react';

function AdHeader() {
  return (
    <header>
      <nav className="bg-white">
        <div className="text-blue-800 px-10 py-5 z-10 w-full border-blue-200">
          <div className="flex items-center justify-between py-2 text-5x1"> {/* Fixed typo: text-5x1 should be text-xl */}
          <img
                            src="https://pouch.jumpshare.com/preview/Ttl4yMYCp2MxESEjCCDLeuJlTprbTYEdaE2mE3Tq_UpNZLGvm3srtq0r5_ctz8TXHp3KCspIuujQec8vecPrffk_3ZbqpPRYDU7SYKSgNo8"
                            alt="EduTech Logo"
                            className="h-8 w-30 object-contain mr-5 mb-3-2"
                        />
            <span className="text-xl font-bold"> {/* Adjusted text size */}
              NNN College of InfoTech and Computing Admission Form
            </span>
            <div className="flex items-center ml-auto text-gray-500"> {/* Added ml-auto to push buttons to the right */}
              {/* Button */}
              <button className="material-icons-outlined p-2 text-blue-800" style={{fontSize: "30px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Button */}
              <button className="material-icons-outlined p-2 text-blue-800" style={{fontSize: "30px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                  <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdHeader;
