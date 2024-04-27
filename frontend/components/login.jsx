'use client'
import { useRouter } from 'next/navigation';
import React from 'react';


const LoginForm = () => {
     
       const router = useRouter();
      
        const handleLogin = () => {
          router.push('/dashboard');
        };

  return (
    <main>
      
   <div className="fixed left-[-7em] bottom-[-7em] h-[26em] w-[26em] bg-gradient-to-b from-[#78b6f480]  to-[#201cf780] rounded-full transform rotate-280 z-10">
   </div>


    <div className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-44 w-auto"
        src="./logo.svg"
        alt="swiftBuy-log0"
      />
      <h2 className="mt-10 text-center text-blue-500 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome, login as an Admin
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email 
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email Address"
              autoComplete="email"
              required
              className="block w-full rounded-lg border-0 px-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline-none"
            />
          </div>
        </div>

        <div className="text-sm">
              <a href="/admin/forgot-password" className="font-semibold flex justify-end text-red-500 hover:text-red-600">
                Forgot password?
              </a>
            </div>

        <div>
          <button
            type="submit"
            onClick={handleLogin}
            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  </main>

  )
}

export default LoginForm;
