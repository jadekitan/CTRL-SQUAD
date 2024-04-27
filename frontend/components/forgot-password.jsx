'use client'
import React, { useState } from 'react';

function ForgotEmailForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add your submit logic here
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="w-full bg-gray-50 p-24 max-w-lg rounded-lg shadow-2xl">
                <div className="mb-4">
                    <label htmlFor="email" className=" text-lg text-gray-600 font-bold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotEmailForm;
