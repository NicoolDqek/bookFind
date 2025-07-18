import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from './api/context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
   
    <BrowserRouter>
    <GlobalContext>
    <App /> 
    </GlobalContext>
    </BrowserRouter>
   
  
)
