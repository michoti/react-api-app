import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div>
            <h3>Login</h3>
        </div>
        <form>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
            type="email" 
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="name@flowbite.com" 
            required />
            <div>
              <span className='text-red-500'>Error</span>
            </div>
        </div>
        <div className="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input 
            type="password"
            id="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <Link 
         to='/forgot-password'
         className='mt-2 inline-block hover:text-primary hover:underline'
         >
         Forgot password?
        </Link>
               <Link 
         to='/register'
         className='mt-2 inline-block hover:text-primary hover:underline'
         >
         sign up
        </Link>
        </form>
    </>
  )
}

export default Login