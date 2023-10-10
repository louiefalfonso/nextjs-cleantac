import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderLogo from './HeaderLogo'

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
                      <a href="index.html">
                        <img src="assets/img/logo/w_logo.svg" alt="Logo" />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="sub-menu">
                            <li className="active">
                              <a href="index.html">Home One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Two</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home Three</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home Four</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Services</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="services.html">Services One</a>
                            </li>
                            <li>
                              <a href="services-2.html">Services Two</a>
                            </li>
                            <li>
                              <a href="services-details.html">Services Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="project.html">Project One</a>
                            </li>
                            <li>
                              <a href="project-two.html">Project Two</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                            <li>
                              <a href="team.html">Team Page</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="estimate.html">Estimate Page</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">Shop Page</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">News</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-list.html">Blog List</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a href="#">
                            <i className="fas fa-search" />
                          </a>
                        </li>
                        <li className="header-btn">
                          <a href="contact.html" className="btn">
                            Get in Touch
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.svg" alt="Logo" />
                      </a>
                    </div>
                    <div className="menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
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
                {/* End Mobile Menu */}
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
