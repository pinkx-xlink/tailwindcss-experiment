import React, { useState } from 'react'
import { Brush, Code, Camera, Circle } from 'lucide-react';

import service1 from '../assets/ux-design.jpg'
import service2 from '../assets/camera.jpg'
import service3 from '../assets/coding.jpg'

const Services = () => {
    const [activeService, setActiveService] = useState(1);
    const services = [
        { 
            id: 1,
            icon: <Brush className='w-5 h-5 sm:w-6, sm:h-6'/>,
            title: "UI/UX Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae risus massa. Donec maximus tortor id diam iaculis, commodo rhoncus mi volutpat. Ut aliquet, risus non volutpat tincidunt, nunc ligula tristique lacus, at consequat leo est et erat. Nam accumsan placerat hendrerit. In finibus pellentesque magna, nec mattis sapien feugiat vel. Nullam sed ultricies massa. In vel ornare dolor, eu scelerisque est.",
            features: ["User Research", "Wireframing", "Prototyping", "UI Design"],
            color: "bg-pink-400",
            butColor: "bg-pink-400 hover:bg-pink-500",
            iconColor: "text-pink-100",
            image: service1
        },
            { 
            id: 2,
            icon: <Camera className='w-5 h-5 sm:w-6, sm:h-6'/>,
            title: "Photography",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae risus massa. Donec maximus tortor id diam iaculis, commodo rhoncus mi volutpat. Ut aliquet, risus non volutpat tincidunt, nunc ligula tristique lacus, at consequat leo est et erat. Nam accumsan placerat hendrerit. In finibus pellentesque magna, nec mattis sapien feugiat vel. Nullam sed ultricies massa. In vel ornare dolor, eu scelerisque est.",
            features: ["User Research", "Wireframing", "Prototyping", "UI Design"],
            color: "bg-green-400",
            butColor: "bg-green-400 hover:bg-green-500",
            iconColor: "text-green-100",
            image: service2
        },
            { 
            id: 3,
            icon: <Code className='w-5 h-5 sm:w-6, sm:h-6'/>,
            title: "Web Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae risus massa. Donec maximus tortor id diam iaculis, commodo rhoncus mi volutpat. Ut aliquet, risus non volutpat tincidunt, nunc ligula tristique lacus, at consequat leo est et erat. Nam accumsan placerat hendrerit. In finibus pellentesque magna, nec mattis sapien feugiat vel. Nullam sed ultricies massa. In vel ornare dolor, eu scelerisque est.",
            features: ["User Research", "Wireframing", "Prototyping", "UI Design"],
            color: "bg-yellow-400",
            butColor: "bg-yellow-400 hover:bg-yellow-500",
            iconColor: "text-yellow-100",
            image: service3
        },
    ];

  return (
    <section id='service' className='relative overflow-hidden
    bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 sm:py-16
    md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row items-center
            justify-center text-center mb-6'
            data-aos='fade-down'>
                <div className='flex-1 max-w-2xl mx-auto space-y-6
                mb-10 lg:mb-0'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl
                        text-gray-900'>
                            Our{" "}
                            <span className='font-bold text-black'>
                                Services<span className='text-green-500'>.</span>
                            </span>
                        </h2>
                        <div className='flex justify-center gap-3 mt-4'>
                            <Circle className='text-pink-500 w-5 h-5'/>
                            <Circle className='text-yellow-500 w-5 h-5'/>
                            <Circle className='text-green-500 w-5 h-5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-3 sm:gap-4 mb-8
            sm:mb-12 justify-center'
            data-aos='fade-up'
            data-aos-delay='100'>
                {services.map((ser) => (
                    <button 
                    key={ser.id}
                    onClick={() => setActiveService(ser.id)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full
                    font-medium flex items-center gap-2 transition-all
                    text-sm sm:text-base ${
                        activeService === ser.id
                        ? `${ser.color} text-white shadow-lg`
                        : `bg-white text-gray-700 shadow-md
                        hover:shadow-lg`
                    }`}
                    data-aos='fade-up'
                    data-aos-delay={ser.id * 100}>
                        {ser.icon}
                        {ser.title}
                    </button>
                ))}
            </div>
            <div className='bg-white rounded-2xl md:rounded-3xl
            shadow-lg md:shadow-xl p-6 sm:p-8 mb-12 md:mb-16 border
            border-gray-100'
            data-aos='fade-up'
            data-aos-delay='200'>
                {services.filter(ser => ser.id === activeService).map(ser => (
                    <div key={ser.id} className='flex flec-col lg:flex-row gap-6
                    md:gap-10'>
                        <div className='flex-1'>
                            <div className='flex items-center gap-3 sm:gap-4 sm:mb-6'
                            data-aos='fade-right'
                            data-aos-delay='300'>
                                <div className={`w-12 h-12 sm:h-16 rounded-lg
                                sm:rounded-xl flex items-center justify-center
                                ${ser.color} bg-opacity-10`}>
                                    <div className={ser.iconColor}>
                                        {ser.icon}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services