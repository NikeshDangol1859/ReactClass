import React from 'react'
import App from './App'
import ReactDOM from "react-dom/client"
import './style/style.css'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <App/>    
    </BrowserRouter>
)

