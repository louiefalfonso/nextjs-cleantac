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
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="search-popup-wrap"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="search-close">
            <span>
              <i className="fas fa-times" />
            </span>
          </div>
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">... Search Here ...</h2>
                  <div className="search-form">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Type keywords here"
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </header>
    </>
  )
}
