import React, { useState } from "react";
import logo from "../../assets/netflix-logo.svg";
import Input from "../../Components/Input/Input";
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [vis, setVis] = useState(false);
  const navigate = useNavigate()
  



  return (
    <div className="absolute h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black bg-gradient-to-t from-black via-transparent to-black w-full h-full bg-opacity-40">
        <nav className="px-8 py-5 flex flex-row z-50 relative">
            <div>
                <img src={logo} alt="logo" className="h-12" />
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600 p-3 text-white font-bold rounded-md hover:bg-red-700 transition flex flex-row justify-center items-center"
            >
              Sign in
            </button>
          </div>
        </nav>
        <div className="absolute top-0 flex flex-col flex-shrink flex-grow justify-center items-center w-auto h-full m-auto text-white space-y-5 inset-0">
        <div className="flex flex-col justify-center items-center text-white m-auto w-auto h-full space-y-5">
          <h1 className="lg:text-5xl inset-0 md:text-3xl sm:text-2xl font-bold text-center space-y-5 m-5">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="lg:text-3xl md:text-2xl sm:text-1xl font-semibold drop-shadow-lg">
            Watch anywhere. Cancel anytime.
          </p>
          <h3 className="lg:text-2xl md:text-1xl drop-shadow-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex flex-row space-x-2">
            <Input
              id="email"
              type="email"
              value={email}
              label="Email"
              notShow={vis}
              error={emailError}
              onChange={(e) => {
                setEmail(e.target.value);
                if (
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e.target.value
                  )
                ) {
                  setEmailError(false);
                } else {
                  setEmailError(true);
                }
              }}
            />

            <Input
              id="password"
              type="password"
              value={password}
              label="Password"
              notShow={!vis}
              error={passwordError}
              onChange={(e) => {
                {
                  setPassword(e.target.value);
                  if (/^.{6,}$/.test(e.target.value)) {
                    setPasswordError(false);
                  } else {
                    setPasswordError(true);
                  }
                }
              }}
            />
            {
                !vis ?
                <button className="bg-red-600 text-2xl text-white rounded-md w-40 hover:bg-red-700 transition flex flex-row justify-center items-center" onClick={() => {
                    if(emailError || email === "")
                    {
                        console.log("Please fill correct email before pressing the button!")
                        setEmailError(true);
                    }
                    else
                    {
                        setVis(true);
                    }
                }}>
                <MdOutlineEmail/> {">"}
            </button>
            :
            <button className="bg-red-600 text-2xl text-white rounded-md w-40 hover:bg-red-700 transition flex flex-row justify-center items-center" onClick={() => {
                if(passwordError)
                {
                    console.log("Please fill correct password before pressing the button!")
                }
                else
                {
                    //post on server then redirect to homepage
                }
            }}>
              Get Started {">"}
            </button>
            }

        
          </div>
        </div>    
            
            
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
