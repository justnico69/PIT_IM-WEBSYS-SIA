// App.js
import React from 'react';
import AdHeader from './AdHeader';
import AdSidebar from './AdSidebar';
import AdMain from './AdMain';


function AllAdComps() {
  return (
    <div className="App min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-400 to-sky-300 ">
      <AdHeader />
        <div className="flex">
            <AdSidebar />
            <AdMain /> 
        </div>
    </div>
  );
}

export default AllAdComps;
