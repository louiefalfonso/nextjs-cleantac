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
          <li className={pathname == "/projects" ? "active" : ""}><Link href="/projects" passHref>Projects</Link></li>
          <li className={pathname == "/teams" ? "active" : ""}><Link href="/teams" passHref>Teams</Link></li>
          <li className={pathname == "/faq" ? "active" : ""}><Link href="/faq" passHref>FAQ</Link></li>
          <li className={pathname == "/contactus" ? "active" : ""}><Link href="/contactus" passHref>Contact Us</Link></li>
      </ul>
    </div>
    </>
  )
}
