const handleLogout = async (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    try {
        await axios.post('/logout', { _token: csrfToken });
        window.location.href = '/login'; // Redirect to the login page
    } catch (error) {
        console.error('An error occurred while logging out:', error);
    }
};

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-80 h-full px-5 overflow-y-auto">
            <div className="flex flex-col justify-between flex-1 ml-3 mt-14">
                <nav className="-mx-3 space-y-6">
                    <div className="space-y-3">
                        <div id="sidebarGradient" className="bg-white rounded-xl shadow-lg mt-20 mb-6 ml-5 mr-5 h-[745px] py-4">
                            <a href="student-profile" className="text-blue-800 hover:text-blue-600 my-4 w-full flex flex-col items-center justify-center">
                                <button className="material-icons-outlined focus:outline-none" style={{ fontSize: '3rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-14">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                                    </svg>
                                    </button>

                                <span className="mt-5 px-3 font-bold mb-4 text-center text-xl">Welcome, Student!</span>
                            </a>
                            <div className="mt-10 px-2 text-blue-600 text-lg font-semibold">
                                <a href="student-dashboard" className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-500 hover:text-white">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                        <span className="material-icons-outlined">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                            </svg>
                                            </span>
                                        <span className="ml-2">Home</span>
                                    </span>
                                </a>

                                <a href="#" className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-500 hover:text-white">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                        <span className="material-icons-outlined">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0 1.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" clip-rule="evenodd" />
                                            </svg>
                                            </span>
                                        <span className="ml-2">Settings</span>
                                    </span>
                                </a>
                                <a href='certofreg' className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-600 hover:text-blue-50">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                      <span className="material-icons-outlined">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                    </svg>

                                      </span>
                                      <span className="ml-2 text-base">Request CoR</span>
                                    </span>
                                  </a>

                                  <a href='program-details' className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-600 hover:text-blue-50">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                      <span className="material-icons-outlined">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clip-rule="evenodd" />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                            </svg>

                                      </span>
                                      <span className="ml-2 text-base">Program Details</span>
                                    </span>
                                  </a>

                                  <a href='shiftreq' className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-600 hover:text-blue-50">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                      <span className="material-icons-outlined">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
                            </svg>

                                      </span>
                                      <span className="ml-2 text-base">Shift Request</span>
                                    </span>
                                  </a>

                                  <a href='assess-billing' className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-600 hover:text-blue-50">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                      <span className="material-icons-outlined">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                                <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
                            </svg>

                                      </span>
                                      <span className="ml-2 text-base">Billing Process</span>
                                    </span>
                                  </a> 
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
