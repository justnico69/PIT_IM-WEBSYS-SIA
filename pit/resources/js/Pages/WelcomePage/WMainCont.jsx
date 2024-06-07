import React from 'react';

function WMainCont() {
    return (
        <div className="overflow-hidden">
            <style jsx>{`
                @keyframes fadeRise {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fade-rise {
                    animation: fadeRise 1s ease-in-out;
                }
            `}</style>
            <div className="flex flex-row w-screen h-screen overflow-hidden">
                <div className="relative bg-blue-800 shadow-lg py-3 px-3 w-full h-full flex flex-col lg:flex-row">
                    <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://imagescdn.homes.com/i2/VXPLK43-4n9ZpgiohBL-_4ogTCPg05VtC_CeB50fugQ/111/washington-high-school-of-information-technology-milwaukee-wi-8-schoolphoto.jpg?p=1)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
                    <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/98/47/38/360_F_298473896_Vsz21xTwMtroEeeGgU8pL2vwt3N65pfR.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
                    <div className="relative z-10 fade-rise flex flex-col justify-center items-start h-full w-full lg:w-1/2 mt-20 pl-10" style={{ paddingBottom: '10%' }}> {/* Adjusted padding */}
                        <h1 className="text-6xl text-white leading-tight font-poppins font-extrabold">Unlock Your Future</h1>
                        <h1 className="text-6xl text-white font-poppins font-extrabold"> in Technology</h1>
                        <h1 className="text-6xl text-white font-poppins font-extrabold"> with us!</h1>
                        <p className="text-2xl text-white font-light mt-6 leading-relaxed text-justify pr-28"> {/* Adjusted margin top */}
                            At NNN University, we empower future tech leaders and innovators. Whether you're starting out or advancing your skills, our cutting-edge programs are tailored to your goals. Join our vibrant community to gain the expertise needed to excel in the dynamic Technology field.
                        </p>
                        <div className="mt-6 inline-flex gap-x-6 pt-2"> {/* Adjusted margin top */}
                            <a href="#"><img className="w-12 h-12 fill-gray-600" alt="instagram logo" src="path/to/instagram-logo.png" /></a>
                            <a href="#"><img className="w-12 h-12 fill-gray-600" alt="twitter logo" src="path/to/twitter-logo.png" /></a>
                            <a href="#"><img className="w-12 h-12 fill-gray-600" alt="facebook logo" src="path/to/facebook-logo.png" /></a>
                        </div>
                    </div>
                    <div className="relative z-10 fade-rise h-full w-full lg:w-1/2 mt-20">
                        <div className="py-8 px-10 grid grid-cols-4 gap-2"> {/* Adjusted gap */}
                            <div className="h-48 col-span-4 sm:col-span-4 relative">
                                <img className="rounded-md absolute inset-0 h-full w-full object-cover" src="https://www.cavendish.ac.ug/wp-content/uploads/2017/05/Cavendish-Uganda-Computer-Science.jpg" alt="fresh beets" />
                            </div>
                            <div className="h-48 col-span-4 sm:col-span-2 relative">
                                <img className="rounded-lg absolute inset-0 h-full w-full object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_A_programmer.jpg" alt="red veggies" />
                            </div>
                            <div className="h-48 col-span-4 sm:col-span-2 relative">
                                <img className="rounded-sm absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="asparagus" />
                            </div>
                            <div className="h-48 col-span-4 sm:col-span relative">
                                <img className="rounded-md absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/YhdkG2UADwjikGExywVS7WN9C902mIx5O2Kx8tRU6dodpN45aISsFyvzlne2uSKYnmxnnIBWmQsFkMItm3ugF_JdCcua__IjmYQYt-rOQq-Ita9NaG9n=h720" alt="carrots" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WMainCont;
