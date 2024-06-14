
function AdMain() {
  return (
    <div className="w-full ml-5">
      <div className="flex flex-row">
        <div className="bg-white rounded-xl shadow-lg px-6 py-4 mt-6 mr-10 flex-grow">
          <p className="text-3xl mt-3 font-bold text-blue-800">Admission Dashboard </p>
          <p className="mt-3 mb-3 text-base font-semibold text-indigo-900">Welcome, admin!</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-3">
        {/* Student Status */}
        <div className="mt-10 ml-2">
          <p className="text-base font-bold text-white">Student Status</p>
        </div>
      </div>

      {/* Dashboard Components */}
      <div className="grid grid-cols-2 gap-2">
        <div className="mr-10 col-span-2 bg-white rounded-xl h-[150px] shadow-lg flex items-center justify-center">
          <a href="accepted-applicants" className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: "2rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="ml-2 text-xl font-semibold">Accepted Applicants</span>
          </a>
        </div>

        <div className="h-24 mt-2 mr-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center justify-center">
          <a href={window.routes.applicationProcess} className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: "2rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="ml-2 text-lg font-semibold">Student Application Processing</span>
          </a>
        </div>

      
      </div>
    </div>
  );
}

export default AdMain;