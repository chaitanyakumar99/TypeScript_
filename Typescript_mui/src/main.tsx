import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Component1 from './Components/Component1.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    {/* <App /> */}
    <Component1 />
  </StrictMode>,

)
