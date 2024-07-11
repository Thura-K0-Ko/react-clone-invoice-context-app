import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const GeneralContext= createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeneralContext.Provider value={{name:"trkk"}}>
    <App />
  </GeneralContext.Provider>,
)
