import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Hero />
       <About />
       <Events />
       <Footer />
      </>
  )
}

export default App
