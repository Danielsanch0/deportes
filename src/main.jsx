import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Galeria from './components/Galeria.jsx'
import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'

import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Aside />
    <Content />
    < Galeria/>
    <Footer />


  </StrictMode>,
)
