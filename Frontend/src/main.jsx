import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navigation from './Navigation/Navigation.jsx'
import LeftBar from './LeftBar/LeftBar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-container">
      <LeftBar />
      <main className="main-content">
        <Navigation />
      </main>
    </div>
  </StrictMode>,
)
