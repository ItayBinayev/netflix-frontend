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
import Navbar from './Components/Navbar/Navbar';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import SeriesPage from './Pages/SeriesPage/SeriesPage';
import ContentPlayerPage from './Pages/ContentPlayerPage/ContentPlayerPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import MyListPage from './Pages/MyListPage/MyListPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>

    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
    <Route path="/movies" element={<MoviesPage/>}></Route>
    <Route path="/series" element={<SeriesPage/>}></Route>
    <Route path="/content/:contentId" element={<ContentPlayerPage/>}></Route>
    <Route path="/search" element={<SearchPage/>}></Route>
    <Route path="/mylist" element={<MyListPage/>}></Route>
    
    </Routes>
    
    </>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
