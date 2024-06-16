import React from 'react';

function EnHeader() {
  return (
    <header>
      <nav className="bg-white">
        <div className="text-blue-800 px-10 py-5 z-10 w-full border-blue-200">
          <div className="flex items-center justify-between py-2 text-5x1"> {/* Fixed typo: text-5x1 should be text-xl */}
          <img
                  src="https://pouch.jumpshare.com/preview/Ttl4yMYCp2MxESEjCCDLeuJlTprbTYEdaE2mE3Tq_UpNZLGvm3srtq0r5_ctz8TXHp3KCspIuujQec8vecPrffk_3ZbqpPRYDU7SYKSgNo8"
                  alt="EduTech Logo"
                  className="h-8 w-30 object-contain mr-2 mb-3-2"
                  />
            <span className="text-xl font-bold"> {/* Adjusted text size */}
              NNN College of InfoTech and Computing Admission Form
            </span>
            <div className="flex items-center ml-auto text-gray-500"> {/* Added ml-auto to push buttons to the right */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default EnHeader;
