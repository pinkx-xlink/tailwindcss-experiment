import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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

  return (
    <div>Footer</div>
  )
}

export default Footer