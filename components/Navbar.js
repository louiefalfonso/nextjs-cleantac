"use client";

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

 const isActive = (path) => {
    return router.pathname === path
 }

  return (
    <>
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
          <li className={isActive('/') ? 'active' : ''} ><Link href="/" passHref>Home</Link></li>
          <li className={isActive('/aboutus') ? 'active' : ''}><Link href="/aboutus" passHref>About Us</Link></li>
          <li className={isActive('/services') ? 'active' : ''}><Link href="/services" passHref>Services</Link></li>
          <li className={isActive('/contactus') ? 'active' : ''}><Link href="/contactus" passHref>Contact Us</Link></li>
      </ul>
    </div>
    </>
  )
}
