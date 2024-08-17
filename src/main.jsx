import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App'
import './index.css'

createRoot(document.getElementById('root')).render(
   <React.StrictMode><BrowserRouter>
    <App />
  </BrowserRouter></React.StrictMode>
  
)
