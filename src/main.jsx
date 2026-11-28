import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirebaseContext } from './context/FirebaseContext.jsx'
import { app, auth, db } from './services/firebase.js'
import './styles/index.css'
import './styles/product.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ app, auth, db }}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
