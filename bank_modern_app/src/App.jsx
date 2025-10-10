import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import WhyOurCompany from './components/WhyOurCompany'
import Services
 from './components/Services'
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
      <WhyOurCompany />
      <Services />
    </div>
  )
}

export default App