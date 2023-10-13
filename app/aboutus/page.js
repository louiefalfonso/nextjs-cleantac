import React from 'react'
import Link from 'next/link'
import IntroductionArea from '@/components/IntroductionArea'
import AboutArea from '@/components/AboutArea'
import ServiceArea from '@/components/ServiceArea'
import VideoArea from '@/components/VideoArea'
import BrandArea from '@/components/BrandArea'
import HistoryArea from '@/components/HistoryArea'
import TeamMembers from '@/components/TeamMembers'

export default function page() {
  return (
    <>
    <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">About us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/" passHref>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AboutArea/>
    <ServiceArea/>
    <VideoArea/>
    <HistoryArea/>
    <TeamMembers/>
    <BrandArea/>
    </>
  )
}
