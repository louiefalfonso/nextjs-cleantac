"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
          <li className={pathname == "/" ? "active" : ""} ><Link href="/" passHref>Home</Link></li>
          <li className={pathname == "/aboutus" ? "active" : ""}><Link href="/aboutus" passHref>About Us</Link></li>
          <li className={pathname == "/services" ? "active" : ""}><Link href="/services" passHref>Services</Link></li>
          <li className={pathname == "/contactus" ? "active" : ""}><Link href="/contactus" passHref>Contact Us</Link></li>
      </ul>
    </div>
    </>
  )
}
