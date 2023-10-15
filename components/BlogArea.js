import React from 'react'

export default function BlogArea() {
  return (
    <>
    <section className="blog-area-two pt-125 pb-60">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style2">
                        <span className="sub-title">Latest News &amp; Articles</span>
                        <h2 className="title tg-element-title">
                            Learn More from Our <br /> Blog Posts
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
                <div className="blog-item-two">
                    <div className="blog-thumb-two">
                        <a href="#">
                        <img src="img/blog/inner_blog_img01.jpg" alt="" />
                        </a>
                    </div>
                <div className="blog-content-two">
                    <a href="#" className="tag">
                    Kitchen
                    </a>
                    <div className="blog-meta">
                    <ul className="list-wrap">
                        <li>
                        <i className="fas fa-calendar-alt" />
                        Jun 4, 2022
                        </li>
                        <li>
                        <i className="far fa-user" />
                        <a href="#">David Martin</a>
                        </li>
                    </ul>
                    </div>
                    <h2 className="title">
                    <a href="#">
                        New Cleaning With Hydrogen at many Peroxide Tips
                    </a>
                    </h2>
                    <a href="#" className="btn btn-two">
                    Read more
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-8">
                <div className="blog-item-two">
                <div className="blog-thumb-two">
                    <a href="#">
                    <img src="img/blog/inner_blog_img02.jpg" alt="" />
                    </a>
                </div>
                <div className="blog-content-two">
                    <a href="blog.html" className="tag">
                    Home
                    </a>
                    <div className="blog-meta">
                    <ul className="list-wrap">
                        <li>
                        <i className="fas fa-calendar-alt" />
                        Jun 4, 2022
                        </li>
                        <li>
                        <i className="far fa-user" />
                        <a href="#">David Martin</a>
                        </li>
                    </ul>
                    </div>
                    <h2 className="title">
                    <a href="#">
                        The “Flip and Fluff” Routine is the Best Thing
                    </a>
                    </h2>
                    <a href="#" className="btn btn-two">
                    Read more
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
