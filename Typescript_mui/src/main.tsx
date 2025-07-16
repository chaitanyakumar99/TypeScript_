import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Component from './Components/Component3.tsx'

createRoot(document.getElementById('root')!).render(
 
  <StrictMode>
    {/* <App /> */}
    <Component />
  </StrictMode>,

)
