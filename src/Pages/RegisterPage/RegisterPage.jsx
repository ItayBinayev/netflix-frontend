import React, { useState } from 'react'
import logo from '../../assets/netflix-logo.svg'
import Input from '../../Components/Input/Input'


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vis, setVis] = useState('');
    
  return (
    <div className="absolute h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
            <img src={logo} alt="logo" className='h-12'/>
        </nav>
        <div className='flex flex-col justify-center items-center text-white m-auto w-auto h-1/2 space-y-5'>
            <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold text-center'>Unlimited movies, TV shows, and more.</h1>
            <p className='lg:text-3xl md:text-2xl sm:text-1xl font-semibold drop-shadow-lg'>Watch anywhere. Cancel anytime.</p>
            <h3 className='lg:text-3xl sm:text-2xl drop-shadow-lg'>
            Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='flex flex-row '>
            <Input
            id="email"
            type="email"
            value={email}
            label="Email"
            onChange={(e) =>  setEmail(e.target.value)}
            />
            <Input
            id="password"
            type="password"
            value={password}
            label="Password"
            onChange={(e) =>  setPassword(e.target.value)}
            />
            <button className="bg-red-600 text-white rounded-md w-40 hover:bg-red-700 transition">
                Get Started {">"}
              </button>
        </div>
        </div>
        </div>
    </div>
    )
}

export default RegisterPage