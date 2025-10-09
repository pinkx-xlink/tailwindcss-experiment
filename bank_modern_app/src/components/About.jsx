import about from '../assets/hands2.jpg'

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden bg-gradient-to-br
    from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:py-20 md:px-12
    lg:px-20 flex flex-col lg:flex-row items-center justify-between'>
        <div className=''>
            <div className=''>
                <img src={about} alt="About" />
            </div>
        </div>
    </section>
  )
}

export default About