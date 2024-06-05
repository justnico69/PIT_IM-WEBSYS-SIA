
const MainContent = () => {
    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 mt-28 mr-14 flex-grow">
                    <p className="text-3xl mt-3 font-bold text-blue-800">Dashboard / Home</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Department Staff!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-3">
                <div className="mt-10">
                    <p className="text-base font-bold text-white">Department Panel</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="h-[255px] col-span-1 bg-white rounded-xl shadow-lg flex items-center justify-center w-auto mr-10">
                    <a href="#" className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>
</span>
                        <span className="ml-2 text-2xl font-semibold">Students </span>
                    </a>
                </div>
                <div className="flex flex-col">
                    <div className="h-[125px] col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-start mb-4 w-11/12">
                        <a href="#" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                            <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
</svg>
</span>
                            <span className="ml-2 text-2xl font-semibold">Subjects</span>
                        </a>
                    </div>
                    <div className="flex justify-between">
                        <div className="h-[115px] bg-white rounded-xl shadow-lg flex items-center justify-center w-1/2 mr-2">
                            <a href="#" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                                <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd" />
  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
</svg>
</span>
                                <span className="ml-2 text-xl font-semibold">Program Details</span>
                            </a>
                        </div>
                        <div className="h-[115px] bg-white rounded-xl shadow-lg flex items-center justify-center w-1/2 ml-2 mr-14">
                            <a href="#" className="ml-5 text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                                <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
</svg>
</span>
                                <span className="ml-2 text-xl font-semibold">Shift Request</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] bg-white rounded-xl shadow-lg flex items-center justify-center w-auto mt-8 mr-14">
                <a href="#" className="text-blue-600 hover:text-blue-800 w-full flex items-center justify-center">
                    <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
  <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
</svg>
</span>
                    <span className="ml-2 text-2xl font-semibold">Assessment and Billing</span>
                </a>
            </div>
        </div>
    );
};

export default MainContent;
