import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios';

function Register() {
  const [name, setName] = useState("");    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', {name, email, password, password_confirmation});
      
      setName("")
      setEmail("")
      setPassword("")
      setPasswordConfirmation("")
      navigate('/');
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
        <>
        <div>
            <h3>Register</h3>
        </div>
        <form onSubmit={handleRegister}>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
            <input 
            type="name" 
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="John Doe" 
            required />
        </div>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
            type="email" 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="name@flowbite.com" 
            required />
        </div>
        <div className="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input 
            type="password"
               value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            id="password" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
        </div>
                <div className="mb-6">
            <label for="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input 
            type="password"
               value={password_confirmation}
            onChange={(e) => {setPasswordConfirmation(e.target.value)}}
            id="password_confirmation" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
         <Link 
         to='/login'
         className='mt-2 inline-block hover:text-primary hover:underline'
         >
         sign in
        </Link>
    </>
  )
}

export default Register