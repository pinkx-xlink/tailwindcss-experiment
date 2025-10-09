import about from '../assets/hands2.jpg'
import { Circle } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden bg-gradient-to-br
    from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:py-20 md:px-12
    lg:px-20 flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex-1 w-full lg:mr-8 xl:mr-12 relative order-2
        lg:order-1 mt-10 lg:mt-0'>
            <div className='w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl
            h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]
            overflow-hidden shadow-lg md:shadow-xl relative z-10 -rotate-2
            rounded-[40%_60%_70%_30%/40%_50%_60%_60%] hover:rotate-0
            transition-transform duration-700'
            data-aos='fade-right'
            data-aos-delay='200'>
                <img src={about} alt="About" 
                className='object-cover w-full h-full transform hover:scale-110
                transition-transform duration-700'/>
            </div>
        <div className='hidden md:block absolute border-2 border-pink-500
        -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 rounded-full
        z-0'
        data-aos='zoom-in'
        data-aos-delay='500'></div>
        <div className='hidden md:block absolute border-2 border-green-500
        -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 rounded-full
        z-0'
        data-aos='zoom-in'
        data-aos-delay='600'></div>
        </div>
        <div className='flex-1 w-full max-w-2xl mx-auto lg:mx-0 space-y-6
        md:space-y-8 relative z-20 order-1 lg:order-2'>
            <div className='mb-6 md:mb-8' data-aos='fade-left'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl
                text-gray-900 text-center lg:text-left'>
                    Agency {" "}
            <span className='font-bold text-black block lg:inline'>
                Overview <span className='text-green-500'>.</span>
            </span> 
                </h2>

            <div className='flex gap-3 mt-4 justify-center lg:justify-start'>
                <Circle className='text-pink-500 w-5 h-5'/>
                <Circle className='text-yellow-500 w-5 h-5'/>
                <Circle className='text-green-500 w-5 h-5'/>

            </div>
        </div>

        </div>
        
    </section>
  )
}

export default About