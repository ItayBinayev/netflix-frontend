import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import HomePage from './Pages/HomePage/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>

    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
    
    </Routes>
    
    </>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
