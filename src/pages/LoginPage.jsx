/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return (
        <div className="flex h-screen bg-slate-900">
            <div className="w-1/2 flex items-center justify-center text-white">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Simple, Free Investing.</h1>
                    <p className="text-xl">Test Your Quant skills here </p>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center bg-gray-800">
                <div className="bg-gray-700 p-8 rounded shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Welcome to TradeCraft</h2>
                    <Link to="/pin"><button className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4 flex justify-center items-center">
                        <GoogleIcon className="p-[2px] mr-1" />
                        Login with Google</button></Link>
                    <p className="text-white mb-4">Or</p>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="border border-gray-500 bg-gray-600 text-white py-2 px-4 w-full mb-4 rounded"
                    />
                    <Link to="/pin"><button className="bg-green-500 text-white py-2 px-4 rounded w-full">Continue</button></Link>
                    <p className="text-sm mt-4 text-gray-400">
                        By proceeding, I agree to <a href="#" className="text-blue-400">T&C</a>, <a href="#" className="text-blue-400">Privacy Policy</a> & <a href="#" className="text-blue-400">Tariff Rates</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
