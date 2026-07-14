import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EstudianteProvider } from './context/EstudianteContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstudianteProvider>
      <App />
    </EstudianteProvider>
  </StrictMode>
)