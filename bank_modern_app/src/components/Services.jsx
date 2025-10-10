import React, { useState } from 'react'
import { Brush, Code, Camera, Circle } from 'lucide-react';

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
            // image: service1
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
            // image: service2
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
            // image: service3
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
                                Services<span>.</span>
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
        </div>
    </section>
  )
}

export default Services