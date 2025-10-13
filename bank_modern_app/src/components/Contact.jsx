import { Mail, Phone, MapPinIcon } from 'lucide-react'
import React from 'react'

const Contact = () => {
const contactInfo = [
  {
    id: 1, 
    icon: Mail,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    title: 'Email',
    content: 'info@example.com',
    aosDelay: '200'
  },
  {
    id: 2, 
    icon: Phone,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: 'Phone Number',
    content: '+123 456-7890',
    aosDelay: '250'
  },
  {
    id: 3, 
    icon: MapPinIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Address',
    content: '444 Main Street, City, Country',
    aosDelay: '300'
  },
]
  return (
    <div>

    </div>
  )
}

export default Contact