import React, { useState } from 'react'
import logo from '../../assets/netflix-logo.svg'
import Input from '../../Components/Input/Input'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <>
  <div className="absolute h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
       <div className='bg-black bg-gradient-to-t from-black via-transparent to-black w-full h-full bg-opacity-40'>
        <nav className='px-12 py-5'>
            <img src={logo} alt="logo" className='h-12'/>
        </nav>
        <div className='flex justify-center'>
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                Sign In
            </h2>
            <div className='flex flex-col gap-4'>
                <Input
                label="Email"
                onChange={(e) =>  setEmail(e.target.value)}
                id="email"
                type="email"              
                value={email}
                />
                <Input
                label="Password"
                onChange={(e) =>  setPassword(e.target.value)}
                id="password"
                type="password"               
                value={password}
                />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                Sign In
              </button>
              <p className='text-neutral-500 mt-12'>
                First time using Netflix?
                <span className='text-white ml-1 hover:underline cirsor-pointer' onClick={() => navigate("/register")}>
                Create an account
                </span>
              </p>
        </div>
        </div>
       </div>
    </div>
  </>
  )
}

export default LoginPage