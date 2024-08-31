import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Aside from './components/Aside.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Galeria from './components/Galeria.jsx'
import Header from './components/Header.jsx'
import Noticias from './components/Noticias.jsx'
import Noticias2 from './components/Noticias2.jsx'
import Noticias3 from './components/Noticias3.jsx'




import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Aside />
    <Content />
    < Galeria/>
    <Noticias />
    <Noticias2 />
    <Noticias3 />

    <Footer />


  </StrictMode>,
)
