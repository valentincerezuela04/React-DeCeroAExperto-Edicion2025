import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FistStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FistStepsApp /> */}
    <MyAwesomeApp />
  </StrictMode>,
)
