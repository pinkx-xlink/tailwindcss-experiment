import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {icon: Facebook, href: '#', color:"hover:bg-pink-600"},
    {icon: Twitter, href: '#', color:"hover:bg-blue-500"},
    {icon: Instagram, href: '#', color:"hover:bg-pink-500"},
    {icon: Linkedin, href: '#', color:"hover:bg-blue-600"},
  ];

  const quickLinks = [
    {label: "Home", href:"#"},
    {label: "About Us", href:"#"},
    {label: "Company", href:"#"},
    {label: "Services", href:"#"},
    {label: "Contact", href:"#"},
  ];

  const services = [
    {label: "UI/UX Design", href:"#"},
    {label: "Web Development", href:"#"},
    {label: "Photography", href:"#"},
    {label: "Branding", href:"#"},
    {label: "Digital Marketing", href:"#"},
  ];

  const contactInfo = [
    {icon: Phone, text: '+123 456 7890', color:'text-pink-500'},
    {icon: Mail, text: 'info@proservice.com', color:'text-yellow-500'},
    {
        icon: MapPin,
        text: "123 Lorem ipsum vla akjaskj skjdckjs v akd.",
        color: "text-green-500",
        multiline: true
    }
  ];

  const decorativeDots = [
    {color: 'text-pink-500'},
    {color: 'text-yellow-500'},
    {color: 'text-green-500'}
  ];

  return (
    <footer className='relative overflow-hidden bg-gradient-to-br
    from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16
    md:py-20 md:px-12 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-8 md:gap-12 mb-12'>
            <div className='space-y-6'>
                <div className='flex items-center text-2xl font-bold'>
                    
                    <div className='w-10 h-10 flex items-center
                    justify-center rounded-full border-4
                    border-pink-600 text-pink-600 mr-2'>
                            P
                    </div>
                        <span>
                            ro<span className='text-yellow-500'>
                                Services</span>
                        </span>
                    </div>

                        <p className='text-gray-300 leading-relaxed font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Duis vitae risus massa. Donec maximus tortor
                             id diam iaculis, commodo rhoncus mi volutpat. Ut 
                             aliquet, risus non volutpat tincidunt, nunc ligula 
                             tristique lacus, at consequat leo est et erat. Nam 
                             accumsan placerat hendrerit. In finibus pellentesque 
                             magna, nec mattis sapien feugiat vel. Nullam sed 
                             ultricies massa. In vel ornare dolor, eu scelerisque est.",
                        </p>

                        <div className='flex gap-4'>
                            {socialLinks.map((social, idx) => (
                                <a 
                                key={idx}
                                href={social.href}
                                className={`w-10 h-10 rounded-full
                                bg-gray-700 flex items-center justify-center
                                transition-colors ${social.color}`}>
                                    <social.icon className='w-5 h-5' />
                                </a>
                            ))}
                        </div>
                </div>
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold border-pink-600
                    pb-2 inline-block'>
                        Quick Links
                    </h3>
                    <ul className='space-y-3'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                    href={link.href}
                                    className='text-gray-300 hover:text-pink-500
                                    transition-colors'>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold border-pink-600
                    pb-2 inline-block'>
                        Our Services
                    </h3>
                    <ul className='space-y-3'>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a 
                                    href={service.href}
                                    className='text-gray-300 hover:text-pink-500
                                    transition-colors'>
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold border-pink-600
                    pb-2 inline-block'>
                        Contact Info
                    </h3>
                    <ul className='space-y-3'>
                            {contactInfo.map((contact, idx) => (
                                <div
                                key={idx}
                                className={`flex items-center
                                gap-3 ${contact.multiline ? 'items-start' : ''}`}>
                                    <div className='w-10 h-10 rounded-full
                                    bg-gray-700 flex items-center justify-center
                                    flex-shrink-0'>
                                        <contact.icon />
                                    </div>
                                </div>
                            ))}
                    </ul>
                </div>

            </div>
    </footer>
  )
}

export default Footer