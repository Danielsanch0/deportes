import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Aside from './components/Aside.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'


import './index.css'


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Header />
      <Aside />
      <Content />
      <Footer />
  
    </StrictMode>,
  )
  