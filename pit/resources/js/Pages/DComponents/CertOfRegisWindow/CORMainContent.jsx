import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MainContent() {
  return (
    <main className="w-full ml-5">
      <div className="flex flex-row">
        <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 mb-5 flex-grow">
          <p className="text-3xl mt-3 font-extrabold font-poppins text-blue-800">Certificate of Registration</p>
          <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Congratulations, you are now officially enrolled!</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        <div className="mt-5">
          <p className="text-base font-bold text-white">Certificate of Registration</p>
        </div>
      </div>

      <div className="bg-white p-5 shadow overflow-hidden sm:rounded-xl mr-8">
        <div className="flex items-start">
          <img src="https://i.pinimg.com/736x/16/a0/f7/16a0f731c7fd2a9001e82766c8bee174.jpg" alt="COR" 
          className="rounded-md mr-4 h-[600px]" />


          <div className="ml-8 mr-8 flex flex-col items-center justify-center">
            <p className="text-xl mt-3 font-bold text-blue-900">Congratulations!</p>
            <p className="text-sm text-center mb-5 font-bold text-gray-600 mt-3">We would like to inform you that you are now officially enrolled to the
                <span className="text-blue-700 font-bold"> NNN</span> <span className="text-blue-800 font"> College Of Information Technology and Computing!</span></p>
            
            <div className="flex items-center justify-center mt-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" 
                enable-background="new 0 0 512 512" 
                viewBox="0 0 512 512" id="certificate"
                style={{ width: "180px", height: "210px" }} >
                    <path fill="#5c77ff" d="M56.4 129.2c-2.8 0-5-2.2-5-5V51.9c0-2.8 2.2-5 5-5h72.3c2.8 0 5 2.2 5 5s-2.2 5-5 5H61.4v67.3C61.4 126.9 59.1 129.2 56.4 129.2zM58 355.1c-2.7 0-5-2.2-5-4.9l-1.1-72.3c0-2.8 2.2-5 4.9-5.1 0 0 .1 0 .1 0 2.7 0 5 2.2 5 4.9l1.1 67.3 67.3-1.1c0 0 .1 0 .1 0 2.7 0 5 2.2 5 4.9 0 2.8-2.2 5-4.9 5.1L58 355.1C58.1 355.1 58 355.1 58 355.1zM241.7 426.8l-14.4 64.7-17.9-17.9-53.8 17.9 50.9-84.9C215.9 416.4 228.1 423.6 241.7 426.8zM353 491.5l-53.8-17.9-17.9 17.9-14.1-63.4c14.3-1.8 27.4-7.8 37.8-16.7L353 491.5zM460.6 353.5h-72.3c-2.8 0-5-2.2-5-5s2.2-5 5-5h67.3v-67.3c0-2.8 2.2-5 5-5s5 2.2 5 5v72.3C465.6 351.2 463.4 353.5 460.6 353.5zM461.2 129.1c-2.7 0-5-2.2-5-4.9l-1.1-67.3L387.9 58c0 0-.1 0-.1 0-2.7 0-5-2.2-5-4.9 0-2.8 2.2-5 4.9-5.1l72.3-1.1c2.7 0 5 2.2 5.1 4.9l1.1 72.3C466.2 126.8 464 129 461.2 129.1 461.2 129.1 461.2 129.1 461.2 129.1zM415.8 138.1h-305c-2.8 0-5-2.2-5-5s2.2-5 5-5h305c2.8 0 5 2.2 5 5S418.5 138.1 415.8 138.1z"></path>
                    <path fill="#92aaff" d="M388.8,192H128.7c-2.8,0-5-2.2-5-5s2.2-5,5-5h260.2c2.8,0,5,2.2,5,5S391.6,192,388.8,192z"></path>
                    <path fill="#354b87" d="M496,11H20.5c-2.8,0-5,2.2-5,5v367.8c0,2.8,2.2,5,5,5h167.9c3.6,7.8,8.4,15,14.5,21.3
                    c7,7.3,15.3,13.1,24.4,17.1c4.3,1.9,8.7,3.4,13.3,4.5c5.7,1.4,11.7,2,17.7,2c3.2,0,6.4-0.2,9.5-0.6c15-1.8,29-8,40.5-17.9
                    c8.5-7.2,15.3-16.3,19.9-26.4H496c2.8,0,5-2.2,5-5V16C501,13.2,498.8,11,496,11z M324.9,360.4c-0.4,7.5-2,14.7-4.8,21.6
                    c-4,9.9-10.4,18.7-18.5,25.7c-10,8.6-22.2,13.9-35.2,15.5c-2.6,0.3-5.4,0.5-8.2,0.5c-4.8,0-9.5-0.5-14.1-1.5
                    c-0.4-0.1-0.8-0.2-1.3-0.3c-12.5-3-23.8-9.4-32.8-18.8c-5.9-6.2-10.6-13.3-13.8-21.2c-3.2-8-4.9-16.4-4.9-25
                    c0-32.1,22.8-59,53-65.3c4.4-1,9.1-1.4,13.8-1.4c36.8,0,66.8,29.9,66.8,66.8C325,358.1,325,359.2,324.9,360.4z M491,378.8H331.9
                    c0,0,0,0,0,0c0-0.1,0-0.2,0.1-0.2c0.3-1,0.6-2,0.8-3c0.1-0.3,0.1-0.6,0.2-1c0.2-0.8,0.4-1.6,0.5-2.4c0.1-0.3,0.1-0.6,0.2-0.9
                    c0.2-1.1,0.4-2.2,0.6-3.3c0,0,0-0.1,0-0.1c0.2-1.1,0.3-2.1,0.4-3.2c0-0.3,0.1-0.7,0.1-1c0.1-0.8,0.1-1.6,0.2-2.5
                    c0-0.3,0-0.7,0.1-1c0-1.1,0.1-2.2,0.1-3.4c0-42.3-34.4-76.8-76.8-76.8c-10.9,0-21.2,2.3-30.6,6.4c-27.1,11.8-46.2,38.9-46.2,70.4
                    c0,1.1,0,2.2,0.1,3.4c0,0.3,0,0.7,0.1,1c0.1,0.8,0.1,1.6,0.2,2.4c0,0.3,0.1,0.7,0.1,1c0.1,1,0.2,2.1,0.4,3.1c0,0.1,0,0.1,0,0.2
                    c0.2,1.1,0.4,2.2,0.6,3.2c0.1,0.3,0.1,0.6,0.2,1c0.2,0.8,0.3,1.6,0.5,2.3c0.1,0.3,0.2,0.7,0.2,1c0.2,1,0.5,1.9,0.8,2.9
                    c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0H25.5V21H491V378.8z"></path>
                    <polygon fill="#5c77ff" 
                    points="258.2 312.1 271.4 338.8 300.9 343.1 279.6 363.9 284.6 393.2 258.2 379.4 231.9 393.2 236.9 363.9 215.6 343.1 245.1 338.8"></polygon>
                    <path fill="#485eff" d="M362.4,247H149.6c-2.8,0-5-2.2-5-5s2.2-5,5-5h212.8c2.8,0,5,2.2,5,5S365.2,247,362.4,247z" opacity=".3"></path>
                    <path fill="#485eff" d="M325 356.9c0 1.2 0 2.3-.1 3.5-.4 7.5-2 14.7-4.8 21.6-4 9.9-10.4 18.7-18.5 25.7-10 8.6-22.2 13.9-35.2 15.5-2.6.3-5.4.5-8.2.5-4.8 0-9.5-.5-14.1-1.5 25.2-11 42.8-36.1 42.8-65.4 0-29.1-17.4-54.1-42.4-65.2 4.4-1 9.1-1.4 13.8-1.4C295.1 290.1 325 320.1 325 356.9zM493.9 256L491 21H25.5L21 246c0 0 26-211.5 237.7-211.5C479 34.5 493.9 256 493.9 256z" 
                    enable-background="new" opacity=".3"></path></svg>

            </div>

            <button type="submit" 
            className="mt-8 w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
              Download CoR
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
