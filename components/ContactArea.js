import React from 'react'

export default function ContactArea() {
  return (
    <>
    <section className="contact-area pt-130 pb-130">
        <div className="container">
            <div className="inner-contact-info-wrap">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="inner-contact-info-item">
                        <div className="icon">
                        <i className="fas fa-phone-volume" />
                        </div>
                        <div className="content">
                            <h3 className="title">Phone Us at:</h3>
                        
                        <a href="tel:0123456789">+55 (000) 68 879</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="inner-contact-info-item">
                        <div className="icon">
                        <i className="fas fa-envelope" />
                        </div>
                        <div className="content">
                            <h3 className="title">Email Us at:</h3>
                        <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="inner-contact-info-item">
                        <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                            <h3 className="title">Locate Us at:</h3>

                        <p>
                            380 St, New York, USA
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="contact-form-area">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                    <div className="contact-img">
                        <img src="img/images/contact_img.jpg" alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="contact-content">
                        <h2 className="title">Contact for Services</h2>
                        <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-grp">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-grp">
                                <input type="email" placeholder="Email address" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-grp">
                                <input type="text" placeholder="Phone number" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-grp">
                                <input type="text" placeholder="Subject" />
                            </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <textarea
                            name="message"
                            placeholder="Write message"
                            defaultValue={""}
                            />
                        </div>
                        <button type="submit" className="btn">
                            Send a message
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
