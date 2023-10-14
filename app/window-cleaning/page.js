import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <>
    <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">Window Cleaning</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/" passHref>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Window Cleaning
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 order-0 order-lg-2">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img src="img/project/project_img13-450x360.webp" alt="" />
              </div>
              <div className="services-details-content">
                <h2 className="title">We give the best Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices pretium nisi
                  amet facilisis. Augue eu vulputate tortor egestas cursus vivamus.
                  that any Commodo dictum iaculis eget massa phasellus ultrices nunc
                  dignissim. Id nulla amet tincidunt urna sed massa sed.
                  Pellentesque imperdiet proin aliquam nisl nulla. In donec massa
                  ultrices amet eget. Tristique sed purus et maecenas condimentum
                  massa dolor. Lacus purus lectus diam diam tellus libero id sapien
                  dummy at justo.
                </p>
                <p className="different-info">
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices vivamus. tha
                  massa nunc dignissim.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices pretium nisi
                  amet facilisis. Augue eu vulputate tortor egestas cursus vivamus.
                  that any Commodo dictum iaculis eget massa phasellus ultrices nunc
                  dignissim. Id nulla amet tincidunt urna sed massa sed.
                  Pellentesque imperdiet proin aliquam nisl nulla.
                </p>
                <div className="service-quality-wrap">
                  <h4 className="title">Service Quality</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                    nulla aliquam. Risus rutrum tellus is eget ultrices pretium nisi
                    amet facilisis. Augue eu vulputate tortor egestas cursus
                    vivamus. that any Commodo iaculis eget massa phasellus ultrices
                    nunc dignissim.
                  </p>
                  <div id="slider1" className="beer-slider" data-start={50}>
                    <img src="img/images/after_img.jpg" alt="" />
                    <div className="beer-reveal">
                      <img src="img/images/before_img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <aside className="services-sidebar">
              <div className="widget">
                <div className="services-cat-list">
                  <h4 className="title">All Services</h4>
                  <ul className="list-wrap">
                    <li><Link href="/kitchen-cleaning" passHref>Kitchen Cleaning</Link></li>
                    <li><Link href="/window-cleaning" passHref className="active">Window Cleaning</Link></li>
                    <li><Link href="/plumbing-service" passHref>Plumbing Service</Link></li>
                    <li><Link href="/laundry-service" passHref>Laundry Services</Link></li>
                    <li><Link href="/office-cleaning" passHref>Office Cleaning</Link></li>
                    <li><Link href="/toilet-cleaning" passHref >Toilet Cleaning</Link></li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div
                  className="download-wrap"
                  data-background="img/images/download_bg.jpg"
                >
                  <span>PDF Files</span>
                  <h2 className="title">Download Brochures</h2>
                  <a href="#">
                    Company Brochure <i className="far fa-file-pdf" />
                  </a>
                  <a href="#">
                    2020 Brochute <i className="far fa-file-pdf" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
