import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FistStepsApp } from './FirstStepsApp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FistStepsApp />

  </StrictMode>,
)
