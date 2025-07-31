import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EventDemo from './EventDemo.jsx'
import Counter from './Counter.jsx'
import DoSum from './DoSum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoSum />
  </StrictMode>,
)
