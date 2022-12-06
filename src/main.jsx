import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cards } from './components/Cards'
import { Verbs } from './components/Verbs'
import { Verbs2 } from './components/Verbs2'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards />
    {/* <Verbs /> */}
    <Verbs2/>
  </React.StrictMode>
)
