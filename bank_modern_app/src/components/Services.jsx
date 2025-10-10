import React, { useState } from 'react'
import { Brush } from 'lucide-react';

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
        }
    ];
    
  return (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae risus massa. Donec maximus tortor id diam iaculis, commodo rhoncus mi volutpat. Ut aliquet, risus non volutpat tincidunt, nunc ligula tristique lacus, at consequat leo est et erat. Nam accumsan placerat hendrerit. In finibus pellentesque magna, nec mattis sapien feugiat vel. Nullam sed ultricies massa. In vel ornare dolor, eu scelerisque est.
    </div>
  )
}

export default Services