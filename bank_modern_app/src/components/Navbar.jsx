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
            <ul className='hidden md:flex items-center gap-6
            lg:gap-8 text-gray-700 font-medium'>
                {navItems.map(({name, href}) => (
                    <li key={name}>
                        <a 
                        href=''
                        className='hover:text-green-500 cursor-pointer
                        transition-colors'>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Button */}
            <div className='hidden md:block'>
                <button
                onClick={toggleMenu}
                className='px-4 py-2 sm:px-5 sm:py-y rounded-lg
                sm:rounded-xl bg-pink-500 text-white font-medium
                hover:bg-pink-600 transition-colors'>
                    Get Started
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar