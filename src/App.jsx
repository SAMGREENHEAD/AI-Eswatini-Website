import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Team from  './components/Team'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Hero />
       <About />
       <Team/>
       <Events />
       <Footer />
      </>
  )
}

export default App
