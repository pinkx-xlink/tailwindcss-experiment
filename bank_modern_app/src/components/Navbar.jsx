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
    <nav className='fixed'>
        <div className=''>
            {/* Logo */ }
            <div className=''>
                <div className=''>
                    P
                </div>
                <span>
                    ro 
                    <span>
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