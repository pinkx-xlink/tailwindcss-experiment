import React, { useState } from 'react'
import { Brush, Code, Camera } from 'lucide-react';

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
    <section id='service' className='relative'>
        <div>
            <div>
                <div>
                    <div>
                        <h2>
                            Our{" "}
                            <span>
                                Services<span>.</span>
                            </span>
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services