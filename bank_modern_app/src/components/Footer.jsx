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
    <div>Footer</div>
  )
}

export default Footer