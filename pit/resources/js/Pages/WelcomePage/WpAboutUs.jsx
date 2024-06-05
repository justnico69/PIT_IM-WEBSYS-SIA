import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUniversity } from '@fortawesome/free-solid-svg-icons';

function WpAboutUs() {
    return (
        
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex items-center justify-center w-full">
                <div className="border-t-2 border-black w-1/3 mb-2"></div>
                <div className="bg-white p-4 relative flex items-center">
                    <FontAwesomeIcon icon={faUniversity} className="text-black mr-2" size="2x" />
                    <p className="text-black text-center text-2xl">About Us</p>
                </div>
                <div className="border-t-2 border-black w-1/3 mb-2"></div>
            </div>
            <div className="flex w-3/4 mt-4">
                <div className="bg-blue-200 w-1/2 h-[300px] mr-5 rounded-lg"> {/* Removed padding here */}
                    <p className="text-black text-center text-2xl mt-5">All About NNN</p>
                </div>
                <div className="bg-blue-400 w-1/2 h-[300px] ml-2 rounded-lg"> {/* Removed padding here */}
                <p className="text-black text-center text-2xl mt-5">Add Pic Here</p>
                </div>
            </div>
        </div>
    );
}

export default WpAboutUs;