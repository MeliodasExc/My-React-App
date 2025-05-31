import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Website structure components/App.jsx'
import './Style/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
