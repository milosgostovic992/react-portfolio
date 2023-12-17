import React from 'react'
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About me',
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/milos.gostovic?mibextid=LQQJ4d',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://instagram.com/milosgostovic992?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/milos-gostovic-243b95247/',
    icon: <FaLinkedin />,
  }
]
