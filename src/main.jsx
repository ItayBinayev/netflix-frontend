import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { StoreProvider } from './Context/Store.jsx'

axios.defaults.baseURL = import.meta.env.VITE_API_ROUTE ? `${import.meta.env.VITE_API_ROUTE}/api` : "https://netflix-backend-eta.vercel.app/api";
console.log(import.meta.env.VITE_API_ROUTE)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
