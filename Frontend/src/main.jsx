import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReservationForm from './ReservationForm/ReservationForm.jsx'
import ReservationCard from './ReservationCard/ReservationCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReservationCard />
    <ReservationForm />
  </StrictMode>,
)
