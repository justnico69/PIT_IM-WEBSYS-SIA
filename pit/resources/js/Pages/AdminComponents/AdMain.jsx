import React from 'react';

function AdMain() {
  return (
    <div className="w-full ml-5">
      <div className="flex flex-row">
        <div className="bg-gradient-to-b from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg px-6 py-4 mt-6 mr-5 flex-grow">
          <p className="text-3xl mt-3 font-bold text-white">Dashboard / Home </p>
          <p className="mt-3 mb-3 text-base font-semibold text-indigo-900">Welcome, admin!</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        {/* Admission */}
        <div className="mt-10">
          <p className="text-base font-bold text-blue-800">Admission</p>
        </div>

        {/* Student Status */}
        <div className="mt-10 ml-2">
          <p className="text-base font-bold text-blue-800">Student Status</p>
        </div>
      </div>

      {/* Dashboard Components */}
      <div className="grid grid-cols-3 gap-6">
        <div className="h-24 col-span-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg flex items-center justify-center">
        <a href="#" className="ml-5 text-white hover:text-white w-full flex items-center">
            <span className="material-icons-outlined focus:outline-none" style={{fontSize: "2rem"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg></span>
            <span className="ml-2 text-lg font-semibold">Enrollment Status</span>
          </a>
        </div>

        <div className="h-24 mr-5 col-span-2 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg flex items-center justify-start">
          <a href="#" className="ml-5 text-white hover:text-white w-full flex items-center">
            <span className="material-icons-outlined focus:outline-none" style={{fontSize: "2rem"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
</svg>
</span>
            <span className="ml-2 text-lg font-semibold">Accepted Applicants</span>
          </a>
        </div>

        <div className="h-24 col-span-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg flex items-center justify-center">
          <a href="#" className="ml-5 text-white hover:text-white w-full flex items-center">
            <span className="material-icons-outlined focus:outline-none" style={{fontSize: "2rem"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clip-rule="evenodd" />
</svg>
</span>
            <span className="ml-2 text-lg font-semibold">Student Evaluation</span>
          </a>
        </div>

        <div className="h-24 col-span-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg flex items-center justify-center">
          <a href={window.routes.applicationProcess} className="ml-5 text-white hover:text-white w-full flex items-center">
            <span className="material-icons-outlined focus:outline-none" style={{fontSize: "2rem"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clip-rule="evenodd" />
</svg>
</span>
            <span className="ml-2 text-lg font-semibold">Student Application Processing</span>
          </a>
        </div>

        <div className="h-24 mr-5 col-span-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-xl shadow-lg flex items-center justify-start">
          <a href="#" className="ml-5 text-white hover:text-white w-full flex items-center">
            <span className="material-icons-outlined focus:outline-none" style={{fontSize: "2rem"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
</svg>
</span>
            <span className="ml-2 text-lg font-semibold">Rejected Applicants</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdMain;
