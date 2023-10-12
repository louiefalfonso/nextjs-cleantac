import React from 'react'
import Link from 'next/link'
export default function IntroductionArea() {
  return (
    <>
        <section className="introduction-area pb-130">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="introduction-img-wrap">
                        <img src="img/images/introduction_img01.png" alt="" />
                        <img src="img/images/introduction_img02.png"alt=""/>
                        <div className="play-btn">
                            <a
                            href="https://www.youtube.com/watch?v=XMWYZ-uZjnQ"
                            className="popup-video"
                            >
                            <i className="fas fa-play" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="introduction-content">
                        <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                            <span className="sub-title">Our Introduction</span>
                            <h2 className="title tg-element-title">
                            Welcome to Best <br /> Cleaning Company
                            </h2>
                        </div>
                        <p className="info-one">
                            Lorem ipsum dolor sit amet consectetur suspendisse nulla aliquam.
                            Risus rutrum tellus ultrices amet facilisis.
                        </p>
                        <p>
                            Commodo dictum iaculis eget mas phasellus ultrices nunc dignissim.
                            Id nulla amet tincidunt urna sed massa the sed massa ultrices amet a
                            egetristique maecenas condimentum dolor. dictum iaculis eget more
                            amet tincidunt urna massa done.
                        </p>
                        <div className="introduction-list">
                            <ul className="list-wrap">
                            <li>
                                <i className="fas fa-check-circle" />
                                We are Committed
                            </li>
                            <li>
                                <i className="fas fa-check-circle" />
                                Highly Rated Cleaning
                            </li>
                            <li>
                                <i className="fas fa-check-circle" />
                                Insured &amp; Bonded
                            </li>
                            <li>
                                <i className="fas fa-check-circle" />
                                Trusted Professionals
                            </li>
                            <li>
                                <i className="fas fa-check-circle" />
                                Residential Cleaning
                            </li>
                            <li>
                                <i className="fas fa-check-circle" />
                                Commercial Cleaning
                            </li>
                            </ul>
                        </div>
                        <div className="introduction-bottom">
                            <Link href="/aboutus" passHref className="btn">Discover More</Link>
                            <span className="call-now">
                            <i className="fas fa-phone-alt" />
                            <a href="tel:0123456789">1-888-452-1505</a>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
