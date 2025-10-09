import React, { useState } from 'react'

const navItems = [
    {name: "Home", href: '#'},
    {name: "About", href: '#about'},
    {name: "Company", href: '#company'},
    {name: "Services", href: '#services'},
    {name: "Contact", href: '#contact'},
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(isMenuOpen);

  return (
    <nav className="fixed w-full bg-gray-50 top-0 
    right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12
        lg:px-20 py-3 md:py-4 flex items-center justify-between">
            {/* Logo */ }
            <div className='flex items-center text-xl sm:text-2xl
            font-bold text-gray-900'>
                <div className='w-8 h-8 sm:h-10 flex items-center
                justify-center rounded-full border-3 sm:border-4
                border-pink-600 text-pink-600 mr-2'>
                    P
                </div>
                <span>
                    ro 
                    <span className='text-yellow-500'>
                        Service
                    </span>
                </span>
            </div>
            {/* Links */}
            <ul className=''>
                {navItems.map(({name, href}) => (
                    <li key={name}>
                        <a 
                        href=''
                        className=''>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Button */}
            <div className=''>
                <button>
                    Get Started
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar