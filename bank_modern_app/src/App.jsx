import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App