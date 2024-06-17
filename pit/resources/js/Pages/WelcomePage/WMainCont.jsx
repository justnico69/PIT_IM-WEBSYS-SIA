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
                    <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.1' }}></div>
                    <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.6' }}></div>
                    <div className="relative z-10 fade-rise flex flex-col justify-center items-start h-full w-full lg:w-1/2 mt-20 pl-10" style={{ paddingBottom: '10%' }}> {/* Adjusted padding */}
                        <h1 className="text-6xl text-white leading-tight font-poppins font-extrabold">Unlock Your Future</h1>
                        <h1 className="text-6xl text-white font-poppins font-extrabold"> in Technology</h1>
                        <h1 className="text-6xl text-white font-poppins font-extrabold"> with us!</h1>
                        <p className="text-2xl text-gray-200 font-medium font-Poppins mt-6 text-justify pr-40"> {/* Adjusted leading and padding-right */}
                        At NNN College of InfoTech and Computing, we empower future tech leaders. Our tailored programs cater to beginners and advanced learners alike. Join our vibrant community to excel in the dynamic tech field.
                        </p>

                        <div className="mt-6 inline-flex gap-x-6 pt-2"> {/* Adjusted margin top */}
                            <a href="#"><svg class="w-8 h-8 fill-violet-400" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>instagram-logo-black-and-white</title><path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"/></svg></a>
                            <a href="#"><svg class="w-8 h-8 fill-sky-400" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z"/></svg></a>
                            <a href="#"><svg class="w-8 h-8 fill-cyan-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z"/></svg></a>
                        </div>
                    </div>
                    <div className="relative z-10 fade-rise h-full w-full lg:w-1/2 mt-32">
                        <div className="py-8 px-10 grid grid-cols-4 gap-2"> {/* Adjusted gap */}
                            <div className="h-64 col-span-4 sm:col-span-4 relative">
                                <img className="rounded-md absolute inset-0 h-full w-full" src="https://i.ibb.co/jTV4Qzq/rules.png" alt="IT" />
                            </div>
                            <div className="h-48 col-span-4 sm:col-span-2 relative">
                                <img className="rounded-lg absolute inset-0 h-full w-full object-cover" src="https://www.epic.com/_next/image/?url=https%3A%2F%2Fmedia.epic.com%2Fepicdotcom%2Fwordpress%2F2019%2F12%2Fmaydm-makers-epic-experience.jpg&w=3840&q=75g" alt="DS" />
                            </div>
                            <div className="h-48 col-span-4 sm:col-span-2 relative">
                                <img className="rounded-sm absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="CS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WMainCont;
