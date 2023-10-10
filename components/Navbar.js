import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <nav>
      <ul>
        <li><Link href="/" passHref>Home</Link></li>
        <li><Link href="/aboutus" passHref>About Us</Link></li>
        <li><Link href="/services" passHref>Services</Link></li>
        <li><Link href="/contactus" passHref>Contact Us</Link></li>
      </ul>
    </nav>
    </>
  )
}
