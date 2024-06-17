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
            const response = await axios.post('/login', { email, password, guard: 'student', _token: csrfToken });
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
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/7067d0170920411.646604dc0db99.jpg)', backgroundPosition: 'top', backgroundSize: 'cover', opacity: '0.9'}}></div>
            <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-lg border-2 border-white bg-white/30 backdrop-blur-lg py-8 px-4 shadow sm:rounded-3xl sm:px-10">
            <div className="text-center">
                <img width="200" height="200" src="https://i.ibb.co/Q6SrF6M/Edutech.png" alt="EduTech Logo" 
                className="mx-auto h-auto mt-5 mb-5" />                
                <h2 className="mb-3 text-blue-800 text-center text-2xl leading-9 font-poppins font-extrabold">
                        NNN College Enrollment Portal
                    </h2>
                    <p className="mt-0 mb-10 text-sm text-center font-medium font-poppins text-white">
                        Nikol, Nikolai, Nikkolo College
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value={csrfToken} />
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-600">Email Address</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        id="email"
                        name="email"
                        placeholder="user@example.com"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full pr-10 pl-3 py-2 border border-white rounded-full placeholder-white focus:outline-none focus:shadow-outline-blue focus:border-blue-500 text-gray-600 bg-transparent transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                        <span className="material-icons-outlined focus:outline-none text-white" style={{ fontSize: '1.5rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        </span>
                    </div>
                    </div>
                </div>


                <div className="mt-5 mb-8">
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-600">Password</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full pr-10 pl-3 py-2 border border-white rounded-full placeholder-white focus:outline-none focus:shadow-outline-blue focus:border-blue-500 text-gray-600 bg-transparent transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                        <span className="material-icons-outlined focus:outline-none text-white" style={{ fontSize: '1.5rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                        </svg>

                        </span>
                    </div>
                    </div>
                </div>

            
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember"
                                type="checkbox"
                                value="1"
                                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out peer"
                                style={{ borderRadius: '0.25rem' }}
                            />
                            <label htmlFor="remember_me" className="ml-2 rounded-sm block text-sm leading-5 text-gray-600">Remember me</label>
                        </div>
                        
                        <style jsx>{`
                        input[type="checkbox"].peer {
                            border-color: #ffffff;
                        }`}</style>

                        <div className="text-sm leading-5">
                            <a href="#"
                               className="font-medium text-gray-600 hover:text-blue-800 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-900 focus:outline-none focus:border-blue-900 focus:shadow-outline-indigo active:bg-blue-900 transition duration-150 ease-in-out"
                            >
                                Log in
                            </button>
                        </span>
                    </div>
                    {error && <div className="mt-4 text-red-700">{error}</div>}
                </form>
            </div>
        </div>

    );
}

export default Login;