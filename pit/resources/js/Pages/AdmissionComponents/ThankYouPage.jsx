import React from 'react';

const ThankYouPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen">
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://imagescdn.homes.com/i2/VXPLK43-4n9ZpgiohBL-_4ogTCPg05VtC_CeB50fugQ/111/washington-high-school-of-information-technology-milwaukee-wi-8-schoolphoto.jpg?p=1)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.1' }}></div>
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.6' }}></div>
            <div className="relative bg-white p-8 rounded shadow-md text-center" style={{ zIndex: '1' }}>
                <h1 className="text-3xl font-extrabold font-poppins mb-4">Thank You!</h1>
                <p className="text-lg">Your application has been submitted successfully.</p>
                <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Go back to home</a>
            </div>
        </div>
    );
};

export default ThankYouPage;
