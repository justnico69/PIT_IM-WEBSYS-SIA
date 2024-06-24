import axios from 'axios';

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
        <aside className="flex flex-col w-80 h-full px-5 overflow-y-auto sticky top-0"> {/* Added sticky and top-0 */}
            <div className="flex flex-col justify-between flex-1 ml-3 mt-14">
                <nav className="-mx-3 space-y-6">
                    <div className="space-y-3">
                        <div id="sidebarGradient" className="bg-white rounded-xl shadow-lg mt-20 mb-6 ml-5 mr-5 h-[626px] py-4">
                            <a href="#" className="text-blue-800 hover:text-blue-600 my-4 w-full flex flex-col items-center justify-center" onClick={handleLogout}>
                                <button className="material-icons-outlined focus:outline-none" style={{ fontSize: '3rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14">
                                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                <span className="mt-5 px-3 font-bold mb-4 text-center text-xl">Welcome, Registrar!</span>
                            </a>
                            <div className="mt-10 px-2 text-blue-600 text-lg font-semibold">
                                <a href="registrar-dashboard" className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-500 hover:text-white">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                        <span className="material-icons-outlined">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0 1.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="ml-2">Settings</span>
                                    </span>
                                </a>

                                <a href="distofcor" className="flex items-center space-x-1 rounded-md mx-4 px-2 py-2 hover:bg-blue-500 hover:text-white">
                                    <span className="bg-transparent p-0.5 transition-all duration-300 inline-flex items-center">
                                        <span className="material-icons-outlined">
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                            <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                                        </svg>
                                        </span>
                                        <span className="ml-2">Distribution of CoR</span>
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
