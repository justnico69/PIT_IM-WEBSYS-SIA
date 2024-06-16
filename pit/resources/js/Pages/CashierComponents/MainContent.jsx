const MainContent = () => {
    return (
        <div className="w-full ml-5">
            <div className="flex flex-row">
                <div className="row-span-3 col-span-4 items-center bg-white rounded-xl shadow-lg px-6 py-4 mt-[140px] mr-8 flex-grow">
                    <p className="text-3xl mt-3 font-bold text-blue-800">Dashboard / Home</p>
                    <p className="mt-3 mb-3 text-base font-semibold text-blue-800">Welcome, Cashier!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-3">
                <div className="mt-10">
                    <p className="text-base font-bold col-span-2 text-white">Cashier Panel</p>
                    
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-12 gap-5 mr-8">
                <div className="row-span-6 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[200px]">
                    <a href="payprocess" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
                            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                            </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Payment Processing</span>
                    </a>
                </div>
                <div className="row-span-3 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                        </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Confirmed Payments</span>
                    </a>
                </div>
                <div className="row-span-3 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center min-h-[100px]">
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center justify-center w-full h-full">
                        <span className="material-icons-outlined focus:outline-none" style={{ fontSize: '2rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                        </svg>
                        </span>
                        <span className="ml-2 text-2xl font-semibold">Pending Payments</span>
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default MainContent;
