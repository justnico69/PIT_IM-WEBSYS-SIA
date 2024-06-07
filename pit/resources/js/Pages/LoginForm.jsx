import axios from 'axios';
import { useState } from 'react';

function Login({ csrfToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/login-page', { email, password, _token: csrfToken });
            const redirectUrl = response.data.redirectUrl;
            window.location.href = redirectUrl;
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="relative h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 px-6">
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://imagescdn.homes.com/i2/VXPLK43-4n9ZpgiohBL-_4ogTCPg05VtC_CeB50fugQ/111/washington-high-school-of-information-technology-milwaukee-wi-8-schoolphoto.jpg?p=1)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/98/47/38/360_F_298473896_Vsz21xTwMtroEeeGgU8pL2vwt3N65pfR.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.8' }}></div>
            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-lg bg-white/30 backdrop-blur-sm py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="text-center">
                <img width="96" height="96" src="https://img.icons8.com/pulsar-gradient/96/nfc-n.png" alt="nfc-n" 
                className="mx-auto h-auto" />                
                <h2 className="mt-3 mb-3 text-violet-950 text-center text-3xl leading-9 font-poppins font-extrabold">
                        NNN Enrollment Portal
                    </h2>
                    <p className="mt-0 mb-8 text-sm text-center font-medium font-poppins text-white">
                        Nikol, Nikolai, Nikkolo University
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrfToken} />
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-5 text-white">Email Address</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                id="email"
                                name="email"
                                placeholder="user@example.com"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="password" className="block text-sm font-medium leading-5 text-white">Password</label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember"
                                type="checkbox"
                                value="1"
                                className="form-checkbox h-4 w-4 text-violet-600 transition duration-150 ease-in-out"
                            />
                            <label htmlFor="remember_me" className="ml-2 rounded-sm block text-sm leading-5 text-white">Remember me</label>
                        </div>

                        <div className="text-sm leading-5">
                            <a href="#"
                               className="font-medium text-white hover:text-blue-900 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-900 focus:outline-none focus:border-violet-900 focus:shadow-outline-indigo active:bg-violet-900 transition duration-150 ease-in-out"
                            >
                                Sign in
                            </button>
                        </span>
                    </div>
                    {error && <div className="mt-4 text-red-600">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default Login;
