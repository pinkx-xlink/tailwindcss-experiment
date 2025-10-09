import { Circle, Heart } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50 py-12 px-4 
    sm:px-6 md:px-8 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center
    justify-between'>
        <div className='flex-1 lg:ml-28 w-full max-w-xl space-y-6 relative
        z-20'>
            <h2 className='text-4xl sm:text-5xl text-gray-900 text-center
            lg:text-left'>
                Professionals{""}
                <span className='font-bold text-black block lg:inline'>
                    Service <span className='text-green-500'>.</span>
                </span>
            </h2>
            <div className='flex gap-3 mt-4 justify-center lg:justify-start'>
                <Circle className='text-pink-500 w-5 h-5'/>
                <Circle className='text-yellow-500 w-5 h-5'/>
                <Circle className='text-green-500 w-5 h-5'/>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6
            lg:gap-48 items-center lg:items-start'>
                <div className='bg-white w-72 rounded-3xl p-6 border
                border-gray-100 shadow-xl lg:shadow-2xl transition'>
                    <div className='ml-4 w-10 h-10 flex items-center
                    justify-center rounded-lg bg-pink-100 mb-4'>
                        <span className='text-pink-500 text-xl'>
                            <Heart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero