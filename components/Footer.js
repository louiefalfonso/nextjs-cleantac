import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area footer-bg">
          <div className="footer-top">
            <div className="container">
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="logo">
                      <Link href="/" passHref>
                        <img src="img/logo/w_logo.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="footer-social-menu">
                      <ul className="list-wrap">
                        <li><Link href="https://www.facebook.com/" passHref>Facebook</Link></li>
                        <li><Link href="https://twitter.com/" passHref>Twitter</Link></li>
                        <li><Link href="https://www.instagram.com/" passHref>Instagram</Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref>LinkedIn</Link></li>
                        <li><Link href="https://www.youtube.com/" passHref>Youtube</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h4 className="title">Contact Us</h4>
                    </div>
                    <div className="footer-content">
                      <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA</p>
                      <div className="footer-contact">
                        <ul className="list-wrap">
                          <li className="phone-addess">
                            <i className="fas fa-phone-alt" />
                            <a href="tel:0123456789">1-888-452-1505</a>
                          </li>
                          <li className="email-addess">
                            <a href="#">cleantac@gmail.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h4 className="title">Our Links</h4>
                    </div>
                    <div className="fw-link-list">
                      <ul className="list-wrap">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="team.html">Meet Our Team</a>
                        </li>
                        <li>
                          <a href="contact.html">What We Do</a>
                        </li>
                        <li>
                          <a href="blog.html">News</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h4 className="title">Our Services</h4>
                    </div>
                    <div className="fw-link-list">
                      <ul className="list-wrap">
                        <li>
                          <a href="services.html">Apartment Cleaning</a>
                        </li>
                        <li>
                          <a href="services.html">House Cleaning</a>
                        </li>
                        <li>
                          <a href="services.html">Carpet Cleaning</a>
                        </li>
                        <li>
                          <a href="services.html">After Renovation</a>
                        </li>
                        <li>
                          <a href="services.html">Curtain Cleaning</a>
                        </li>
                        <li>
                          <a href="services.html">Window Cleaning</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="fw-title">
                      <h4 className="title">Newsletter</h4>
                    </div>
                    <div className="footer-newsletter">
                      <p>
                        Subscribe our newsletter to get our latest update &amp; news
                      </p>
                      <form action="#">
                        <input type="text" placeholder="Your mail address" />
                        <button type="submit" className="btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="copyright-text">
                    <p>
                      2023 <a href="index.html">Clentac.</a> All Rights Reserved by
                      Profile Name.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="footer-bottom-menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
