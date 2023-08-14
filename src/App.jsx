import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
    
    </Routes>
    
    </>
    </BrowserRouter>
  )
}

export default App
