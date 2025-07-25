import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './new.css';
import App from './App[1].jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
