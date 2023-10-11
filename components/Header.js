import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderLogo from './HeaderLogo'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Header() {
  return (
    <>
    <header>
        <HeaderTop/>
        <HeaderLogo/>
        <div id="header-fixed-height" />
        <div id="sticky-header" className="menu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo d-none">
                        <Link href="/" passHref><img src="img/logo/w_logo.svg" alt="Logo" /></Link>
                    </div>
                    <Navbar/>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        
                        <li className="header-btn">
                            <Link href="/contactus" className="btn" passHref>Get in Touch</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                        <Link href="/" passHref>
                          <img src="img/logo/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li><Link href="https://www.facebook.com/" passHref><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.instagram.com/" passHref><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link></li>
                        <li><Link href="https://www.youtube.com/" passHref><i className="fab fa-youtube" /></Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
            </div>
          </div>
        </div>
    </header>
    </>
  )
}
