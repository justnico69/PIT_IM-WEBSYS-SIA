// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-500 via-blue-400 to-sky-300 border-b-2 border-blue-100">
      <div className="container mx-auto px-6 py-2.5 flex items-center justify-between">
        <div className="text-white text-xl font-bold">NNN<span className="text-blue-800">University</span></div>
      </div>
    </header>
  );
}

export default Header;
