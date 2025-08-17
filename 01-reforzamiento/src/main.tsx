import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './bases/01-const-let.ts'
import './bases/02-template-string.ts'
import './bases/03-object-literal.ts'
import './bases/04-arrays.ts'
import './bases/05-functions.ts'
import './bases/06-destructuring.ts'
import './bases/07-array-destructuring.ts'
import './bases/08-imp-exp.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
